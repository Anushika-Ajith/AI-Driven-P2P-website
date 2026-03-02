import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from "@nestjs/common";
import { WhatsAppService } from "../whatsapp/whatsapp.service";
import { SarvamService } from "../sarvam/sarvam.service";
import { OpenAIService } from "../openai/openai.service";

@Controller("webhook")
export class WebhookController {
  constructor(
    private whatsapp: WhatsAppService,
    private sarvam: SarvamService,
    private openai: OpenAIService
  ) {}

  // GET endpoint for webhook verification (hub.challenge)
  @Get()
  verify(@Query("hub.mode") mode: string, @Query("hub.challenge") challenge: string, @Query("hub.verify_token") token: string) {
    console.log("Webhook verification request received");
    console.log("Mode:", mode);
    console.log("Challenge:", challenge);
    console.log("Verify Token:", token);

    // Verify token (you should set this in your Meta Business account)
    const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "your_verify_token";
    
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

      if (!msg) {
        console.log("NO MESSAGE in webhook - acknowledging anyway");
        return "OK";
      }

      console.log("Message type:", msg.type, "From:", from);

      // Acknowledge receipt immediately to prevent retries
      // Process message asynchronously (don't await)
      this.processMessage(msg, from).catch((err) => {
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

  // Process message asynchronously
  private async processMessage(msg: any, from: string) {
    // 📌 CASE 1: USER SENDS AUDIO
    if (msg.type === "audio") {
      try {
        const mediaId = msg.audio.id;

        // 1) Download user voice
        const filePath = await this.whatsapp.downloadMedia(mediaId);

        // 2) Convert speech to text
        const textFromUser = await this.sarvam.stt(filePath);

        // 3) Generate LLM reply
        const answer = await this.openai.ask(textFromUser);

        // 4) Convert reply text to speech
        const replyVoice = await this.sarvam.tts(answer, "en-IN", "female");

        // 5) Upload speech mp3 to WhatsApp
        const uploadedId = await this.whatsapp.uploadMedia(replyVoice);

        // 6) Send audio reply BACK to WhatsApp user
        await this.whatsapp.sendAudio(from, uploadedId);

        console.log("✅ Voice reply sent!");
      } catch (audioError: any) {
        console.error("❌ Error processing audio:", audioError.message);
      }
      return;
    }

    // 📌 CASE 2: USER SENDS TEXT
    if (msg.type === "text") {
      try {
        const text = msg.text.body;
        console.log("Received text message:", text);

        // Print "hi" to terminal when user sends "hi"
        if (text.toLowerCase().trim() === "hi") {
          console.log("hi");
        }

        // Print "hello" to terminal when user sends "hello"
        if (text.toLowerCase().trim() === "hello") {
          console.log("hello");
        }

        const answer = await this.openai.ask(text);

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