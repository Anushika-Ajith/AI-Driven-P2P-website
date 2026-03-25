import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from "@nestjs/common";
import { WhatsAppService } from "../whatsapp/whatsapp.service";
import { SarvamService } from "../sarvam/sarvam.service";
import { OpenAIService } from "../openai/openai.service";
import { AskService } from "../ask/ask.service";
import { UserRoleService } from "../auth/user-role.service";
import * as fs from "fs";

@Controller("webhook")
export class WebhookController {
  constructor(
    private whatsapp: WhatsAppService,
    private sarvam: SarvamService,
    private openai: OpenAIService,
    private askService: AskService,
    private userRoleService: UserRoleService
  ) {}

  // GET endpoint for webhook verification (hub.challenge)
  @Get()
  verify(@Query("hub.mode") mode: string, @Query("hub.challenge") challenge: string, @Query("hub.verify_token") token: string) {
    console.log("Webhook verification request received");
    console.log("Mode:", mode);
    console.log("Challenge:", challenge);
    console.log("Verify Token:", token);

    // Verify token (you should set this in your Meta Business account)
    const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "my_verify_token";
    
    if (mode === "subscribe" && token === verifyToken) {
      console.log("Webhook verified successfully!");
      // Return the challenge to complete verification
      return challenge;
    } else {
      console.log("Webhook verification failed");
      return "Verification failed";
    }
  }

  // POST endpoint for receiving messages
  @Post()
  @HttpCode(HttpStatus.OK)
  async handle(@Body() body: any) {
    try {
      // Handle status updates (acknowledge immediately to prevent retries)
      const value = body.entry?.[0]?.changes?.[0]?.value;
      
      // If this is a status update, acknowledge and return immediately
      if (value?.statuses) {
        console.log("📊 Status update received, acknowledging...");
        return "OK";
      }

      // Debug: Log the incoming webhook body
      console.log("Webhook received:", JSON.stringify(body, null, 2));
      
      const msg = value?.messages?.[0];
      const from = msg?.from; // your WhatsApp number
      const contactName = value?.contacts?.[0]?.profile?.name || "there";

      if (!msg) {
        console.log("NO MESSAGE in webhook - acknowledging anyway");
        return "OK";
      }

      console.log("Message type:", msg.type, "From:", from);

      // Acknowledge receipt immediately to prevent retries
      // Process message asynchronously (don't await)
      this.processMessage(body, msg, from, contactName).catch((err) => {
        console.error("Error in async message processing:", err);
      });

      // Return immediately to stop retries
      return "OK";
    } catch (err: any) {
      console.error("WEBHOOK ERROR:", err);
      console.error("Error details:", err.message);
      // Always return 200 to prevent retries
      return "OK";
    }
  }

  private extractUserRole(body: any, value: any): string {
    return (
      body?.role ||
      body?.userRole ||
      body?.user?.role ||
      value?.role ||
      value?.userRole ||
      value?.contacts?.[0]?.role ||
      ""
    );
  }

  // Process message asynchronously
  private async processMessage(
    body: any,
    msg: any,
    from: string,
    contactName: string = "there"
  ) {
    const value = body?.entry?.[0]?.changes?.[0]?.value;
    const roleFromPayload = this.extractUserRole(body, value);
    const roleFromApi = await this.userRoleService.fetchRoleByPhone(from);
    const userRole =
      (roleFromApi && String(roleFromApi).trim()) || roleFromPayload || "";

    // 📌 CASE 1: USER SENDS AUDIO
    if (msg.type === "audio") {
      try {
        const mediaId = msg.audio.id;

        // 1) Download user voice
        const filePath = await this.whatsapp.downloadMedia(mediaId);

        // 2) Read the file and create a file-like object for handleVoice
        const fileBuffer = fs.readFileSync(filePath);
        const file = {
          buffer: fileBuffer,
          originalname: `${mediaId}.ogg`,
          mimetype: msg.audio.mime_type || "audio/ogg",
        };

        // For individual WhatsApp users:
        // transcribe audio and return text in same language.
        if (userRole === "INDIVIDUAL_WHATSAPP_USER") {
          const transcript = await this.sarvam.stt(filePath);
          await this.whatsapp.sendText(from, transcript || "Sorry, could not transcribe the audio.");
          console.log("✅ Sent transcript text for INDIVIDUAL_WHATSAPP_USER");
          return;
        }

        // 3) Use askService.handleVoice which handles STT, caching, LLM, TTS, and storage
        const result = await this.askService.handleVoice(file, "female");
        console.log("🎵 handleVoice result:", result);

        if (!result || !result.audio_url) {
          console.error("❌ No audio URL returned from handleVoice");
          return;
        }

        // 4) Upload the generated audio to WhatsApp
        // result.audio_url is like "/audio/tts_1234567890.mp3" or "audio/tts_1234567890.mp3"
        const audioPath = result.audio_url.startsWith("/") 
          ? result.audio_url.substring(1) 
          : result.audio_url;
        
        const uploadedId = await this.whatsapp.uploadMedia(audioPath);

        // 5) Send audio reply BACK to WhatsApp user
        await this.whatsapp.sendAudio(from, uploadedId);

        console.log("✅ Voice reply sent!");
      } catch (audioError: any) {
        console.error("❌ Error processing audio:", audioError.message);
        console.error("❌ Error stack:", audioError.stack);
      }
      return;
    }

    // 📌 CASE 2: USER SENDS TEXT
    if (msg.type === "text") {
      try {
        const text = msg.text.body.toLowerCase().trim();
        console.log("Received text message:", text);

        // Handle greetings (hi, hello, hey, etc.)
        const greetings = ["hi", "hello", "hey", "hey there", "hi there", "greetings", "good morning", "good afternoon", "good evening"];
        
        if (greetings.includes(text)) {
          const greetingResponse = `Hello ${contactName} 👋\n\nHow can I help you today?`;
          await this.whatsapp.sendText(from, greetingResponse);
          console.log(`✅ Greeting sent to ${contactName}`);
          return;
        }

        // Check if question is relevant to ODIN domain
        const isRelevant = await this.openai.isRelevantToDomain(msg.text.body);
        
        if (!isRelevant) {
          const fallbackMessage = "Sorry, please ask questions related to ODIN Technologies, procurement, P2P workflows, vendor management, or document processing.";
          await this.whatsapp.sendText(from, fallbackMessage);
          console.log("⚠️ Non-relevant question detected, sent fallback message");
          return;
        }

        // For relevant questions, use OpenAI
        const answer = await this.openai.ask(msg.text.body);

        await this.whatsapp.sendText(from, answer);
        console.log("✅ Text reply sent!");
      } catch (textError: any) {
        console.error("❌ Error processing text:", textError.message);
      }
      return;
    }

    console.log("⚠️  Unhandled message type:", msg.type);
  }
}