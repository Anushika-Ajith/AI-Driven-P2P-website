import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from "@nestjs/common";
import { WhatsAppService } from "../whatsapp/whatsapp.service";
import { SarvamService } from "../sarvam/sarvam.service";
import { OpenAIService } from "../openai/openai.service";
import { AskService } from "../ask/ask.service";
import { UserRoleService } from "../auth/user-role.service";
import * as fs from "fs";

@Controller("webhook")
export class WebhookController {
  private processedMessageIds = new Map<string, number>();
  private processedMessageTtlMs = 5 * 60 * 1000; // 5 minutes

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

    const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "my_verify_token";

    if (mode === "subscribe" && token === verifyToken) {
      console.log("Webhook verified successfully!");
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
      const value = body.entry?.[0]?.changes?.[0]?.value;

      if (value?.statuses) {
        console.log("📊 Status update received, acknowledging...");
        return "OK";
      }

      console.log("Webhook received:", JSON.stringify(body, null, 2));

      const msg = value?.messages?.[0];
      const from = msg?.from;
      const contactName = value?.contacts?.[0]?.profile?.name || "there";

      if (!msg) {
        console.log("NO MESSAGE in webhook - acknowledging anyway");
        return "OK";
      }

      const msgId = msg?.id;
      const now = Date.now();
      const msgTimestampSec = Number(msg?.timestamp);
      const maxAgeMs =
        Number(process.env.WHATSAPP_MESSAGE_MAX_AGE_MS ?? this.processedMessageTtlMs) ||
        this.processedMessageTtlMs;

      if (msgTimestampSec && maxAgeMs > 0 && now - msgTimestampSec * 1000 > maxAgeMs) {
        console.log(
          "Skipping stale webhook message",
          msgId,
          "ageMs=",
          now - msgTimestampSec * 1000,
          "maxAgeMs=",
          maxAgeMs
        );
        return "OK";
      }

      if (msgId) {
        const seenAt = this.processedMessageIds.get(msgId);
        if (seenAt && now - seenAt < this.processedMessageTtlMs) {
          console.log("Skipping duplicate webhook message", msgId);
          return "OK";
        }
        this.processedMessageIds.set(msgId, now);
        for (const [id, ts] of this.processedMessageIds.entries()) {
          if (now - ts > this.processedMessageTtlMs) this.processedMessageIds.delete(id);
        }
      }

      console.log("Message type:", msg.type, "From:", from);

      this.processMessage(body, msg, from, contactName).catch((err) => {
        console.error("Error in async message processing:", err);
      });

      return "OK";
    } catch (err: any) {
      console.error("WEBHOOK ERROR:", err);
      console.error("Error details:", err.message);
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

  private isIndividualWhatsAppUser(role: string): boolean {
    const normalized = String(role || "")
      .trim()
      .toUpperCase()
      .replace(/[\s-]+/g, "_");

    return (
      normalized === "INDIVIDUAL_WHATSAPP_USER" ||
      normalized === "INVIDIAL_WHATSAPP_USER"
    );
  }

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
    console.log("Resolved user role:", userRole || "(empty)");

    if (msg.type === "audio") {
      try {
        const mediaId = msg.audio.id;

        const filePath = await this.whatsapp.downloadMedia(mediaId);

        const fileBuffer = fs.readFileSync(filePath);
        const file = {
          buffer: fileBuffer,
          originalname: `${mediaId}.ogg`,
          mimetype: msg.audio.mime_type || "audio/ogg",
        };

        if (this.isIndividualWhatsAppUser(userRole)) {
          const transcript = await this.sarvam.stt(filePath);
          await this.whatsapp.sendText(
            from,
            transcript || "Sorry, could not transcribe the audio."
          );
          console.log("✅ Sent transcript text for INDIVIDUAL_WHATSAPP_USER");
          return;
        }

        const result = await this.askService.handleVoice(file, "female");
        console.log("🎵 handleVoice result:", result);

        if (!result || !result.audio_url) {
          console.error("❌ No audio URL returned from handleVoice");
          return;
        }

        const audioPath = result.audio_url.startsWith("/")
          ? result.audio_url.substring(1)
          : result.audio_url;

        const uploadedId = await this.whatsapp.uploadMedia(audioPath);

        await this.whatsapp.sendAudio(from, uploadedId);

        console.log("✅ Voice reply sent!");
      } catch (audioError: any) {
        console.error("❌ Error processing audio:", audioError.message);
        console.error("❌ Error stack:", audioError.stack);
      }
      return;
    }

    if (msg.type === "text") {
      try {
        const text = msg.text.body.toLowerCase().trim();
        console.log("Received text message:", text);

        const greetings = [
          "hi",
          "hello",
          "hey",
          "hey there",
          "hi there",
          "greetings",
          "good morning",
          "good afternoon",
          "good evening",
        ];

        if (greetings.includes(text)) {
          const greetingResponse = `Hello ${contactName} 👋\n\nHow can I help you today?`;
          await this.whatsapp.sendText(from, greetingResponse);
          console.log(`✅ Greeting sent to ${contactName}`);
          return;
        }

        const isRelevant = await this.openai.isRelevantToDomain(msg.text.body);

        if (!isRelevant) {
          const fallbackMessage =
            "Sorry, please ask questions related to ODIN Technologies, procurement, P2P workflows, vendor management, or document processing.";
          await this.whatsapp.sendText(from, fallbackMessage);
          console.log("⚠️ Non-relevant question detected, sent fallback message");
          return;
        }

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
