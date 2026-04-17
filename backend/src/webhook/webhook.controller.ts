// import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from "@nestjs/common";
// import { WhatsAppService } from "../whatsapp/whatsapp.service";
// import { SarvamService } from "../sarvam/sarvam.service";
// import { AskService } from "../ask/ask.service";
// import { UserRoleService } from "../auth/user-role.service";
// import * as fs from "fs";

// @Controller("webhook")
// export class WebhookController {
//   private processedMessageIds = new Map<string, number>();
//   private processedMessageTtlMs = 5 * 60 * 1000; // 5 minutes

//   constructor(
//     private whatsapp: WhatsAppService,
//     private sarvam: SarvamService,
//     private askService: AskService,
//     private userRoleService: UserRoleService
//   ) {}

//   // GET endpoint for webhook verification (hub.challenge)
//   @Get()
//   verify(@Query("hub.mode") mode: string, @Query("hub.challenge") challenge: string, @Query("hub.verify_token") token: string) {
//     console.log("Webhook verification request received");
//     console.log("Mode:", mode);
//     console.log("Challenge:", challenge);
//     console.log("Verify Token:", token);

//     const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || "my_verify_token";

//     if (mode === "subscribe" && token === verifyToken) {
//       console.log("Webhook verified successfully!");
//       return challenge;
//     } else {
//       console.log("Webhook verification failed");
//       return "Verification failed";
//     }
//   }

//   // POST endpoint for receiving messages
//   @Post()
//   @HttpCode(HttpStatus.OK)
//   async handle(@Body() body: any) {
//     try {
//       const value = body.entry?.[0]?.changes?.[0]?.value;

//       if (value?.statuses) {
//         console.log("📊 Status update received, acknowledging...");
//         return "OK";
//       }

//       console.log("Webhook received:", JSON.stringify(body, null, 2));

//       const msg = value?.messages?.[0];
//       const from = msg?.from;
//       const contactName = value?.contacts?.[0]?.profile?.name || "there";

//       if (!msg) {
//         console.log("NO MESSAGE in webhook - acknowledging anyway");
//         return "OK";
//       }

//       const msgId = msg?.id;
//       const now = Date.now();
//       const msgTimestampSec = Number(msg?.timestamp);
//       const maxAgeMs =
//         Number(process.env.WHATSAPP_MESSAGE_MAX_AGE_MS ?? this.processedMessageTtlMs) ||
//         this.processedMessageTtlMs;

//       if (msgTimestampSec && maxAgeMs > 0 && now - msgTimestampSec * 1000 > maxAgeMs) {
//         console.log(
//           "Skipping stale webhook message",
//           msgId,
//           "ageMs=",
//           now - msgTimestampSec * 1000,
//           "maxAgeMs=",
//           maxAgeMs
//         );
//         return "OK";
//       }

//       if (msgId) {
//         const seenAt = this.processedMessageIds.get(msgId);
//         if (seenAt && now - seenAt < this.processedMessageTtlMs) {
//           console.log("Skipping duplicate webhook message", msgId);
//           return "OK";
//         }
//         this.processedMessageIds.set(msgId, now);
//         for (const [id, ts] of this.processedMessageIds.entries()) {
//           if (now - ts > this.processedMessageTtlMs) this.processedMessageIds.delete(id);
//         }
//       }

//       console.log("Message type:", msg.type, "From:", from);

//       this.processMessage(body, msg, from, contactName).catch((err) => {
//         console.error("Error in async message processing:", err);
//       });

//       return "OK";
//     } catch (err: any) {
//       console.error("WEBHOOK ERROR:", err);
//       console.error("Error details:", err.message);
//       return "OK";
//     }
//   }

//   private extractUserRole(body: any, value: any): string {
//     return (
//       body?.role ||
//       body?.userRole ||
//       body?.user?.role ||
//       value?.role ||
//       value?.userRole ||
//       value?.contacts?.[0]?.role ||
//       ""
//     );
//   }

//   /** Maps resolved WhatsApp role to LangGraph `role` field (defaults to store like Web UI). */
//   private roleForAgent(resolvedRole: string): string {
//     const r = String(resolvedRole || "")
//       .trim()
//       .toLowerCase()
//       .replace(/[\s-]+/g, "_");
//     if (!r) return "store";
//     return r;
//   }

//   /** Same agent answer as Web UI; append structured payload when present (WhatsApp text limit ~4096). */
//   private formatWhatsAppAgentReply(answer: unknown, structured: unknown): string {
//     const main = String(answer ?? "").trim();
//     if (structured === null || structured === undefined) {
//       return main || " ";
//     }
//     let extra: string;
//     try {
//       extra =
//         typeof structured === "string"
//           ? structured
//           : JSON.stringify(structured, null, 2);
//     } catch {
//       extra = String(structured);
//     }
//     const sep = "\n\n—\n";
//     const combined = main + sep + extra;
//     const max = 4090;
//     if (combined.length <= max) return combined;
//     const budget = max - main.length - sep.length - 20;
//     if (budget < 80) return main.slice(0, max - 3) + "...";
//     return main + sep + extra.slice(0, budget) + "\n…";
//   }

//   private isIndividualWhatsAppUser(role: string): boolean {
//     const normalized = String(role || "")
//       .trim()
//       .toUpperCase()
//       .replace(/[\s-]+/g, "_");

//     return (
//       normalized === "INDIVIDUAL_WHATSAPP_USER" ||
//       normalized === "INVIDIAL_WHATSAPP_USER"
//     );
//   }

//   private async processMessage(
//     body: any,
//     msg: any,
//     from: string,
//     contactName: string = "there"
//   ) {
//     const value = body?.entry?.[0]?.changes?.[0]?.value;
//     const roleFromPayload = this.extractUserRole(body, value);
//     const roleFromApi = await this.userRoleService.fetchRoleByPhone(from);
//     const userRole =
//       (roleFromApi && String(roleFromApi).trim()) || roleFromPayload || "";
//     console.log("Resolved user role:", userRole || "(empty)");

//     if (msg.type === "audio") {
//       try {
//         const mediaId = msg.audio.id;

//         const filePath = await this.whatsapp.downloadMedia(mediaId);

//         const fileBuffer = fs.readFileSync(filePath);
//         const file = {
//           buffer: fileBuffer,
//           originalname: `${mediaId}.ogg`,
//           mimetype: msg.audio.mime_type || "audio/ogg",
//         };

//         if (this.isIndividualWhatsAppUser(userRole)) {
//           const transcript = await this.sarvam.stt(filePath);
//           await this.whatsapp.sendText(
//             from,
//             transcript || "Sorry, could not transcribe the audio."
//           );
//           console.log("✅ Sent transcript text for INDIVIDUAL_WHATSAPP_USER");
//           return;
//         }

//         const result = await this.askService.handleVoice(file, "female");
//         console.log("🎵 handleVoice result:", result);

//         if (!result || !result.audio_url) {
//           console.error("❌ No audio URL returned from handleVoice");
//           return;
//         }

//         const audioPath = result.audio_url.startsWith("/")
//           ? result.audio_url.substring(1)
//           : result.audio_url;

//         const uploadedId = await this.whatsapp.uploadMedia(audioPath);

//         await this.whatsapp.sendAudio(from, uploadedId);

//         console.log("✅ Voice reply sent!");
//       } catch (audioError: any) {
//         console.error("❌ Error processing audio:", audioError.message);
//         console.error("❌ Error stack:", audioError.stack);
//       }
//       return;
//     }

//     if (msg.type === "text") {
//       try {
//         const text = msg.text.body.toLowerCase().trim();
//         console.log("Received text message:", text);

//         const greetings = [
//           "hi",
//           "hello",
//           "hey",
//           "hey there",
//           "hi there",
//           "greetings",
//           "good morning",
//           "good afternoon",
//           "good evening",
//         ];

//         if (greetings.includes(text)) {
//           const greetingResponse = `Hello ${contactName} 👋\n\nHow can I help you today?`;
//           await this.whatsapp.sendText(from, greetingResponse);
//           console.log(`✅ Greeting sent to ${contactName}`);
//           return;
//         }

//         // Same LangGraph /agent path as Web UI POST /ask (memory → entity → intent_router → faq|knowledge|action|fallback).
//         const agentRole = this.roleForAgent(userRole);
//         const result = await this.askService.ask(msg.text.body, {
//           userId: `wa_${from}`,
//           role: agentRole,
//         });
//         console.log("[webhook][whatsapp:text] agent answer preview:", String(result?.answer ?? "").slice(0, 160));
//         if (result?.structured != null) {
//           console.log("[webhook][whatsapp:text] agent structured payload present");
//         }

//         const outbound = this.formatWhatsAppAgentReply(result.answer, result.structured);
//         await this.whatsapp.sendText(from, outbound);
//         console.log("✅ Text reply sent (via ai-agent /agent, same as Web UI)");
//       } catch (textError: any) {
//         console.error("❌ Error processing text:", textError.message);
//       }
//       return;
//     }

//     console.log("⚠️  Unhandled message type:", msg.type);
//   }
// }



import { Controller, Post, Get, Body, Query, HttpCode, HttpStatus } from "@nestjs/common";
import { WhatsAppService } from "../whatsapp/whatsapp.service";
import { SarvamService } from "../sarvam/sarvam.service";
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

  /** Maps resolved WhatsApp role to LangGraph `role` field (defaults to store like Web UI). */
  private roleForAgent(resolvedRole: string): string {
    const r = String(resolvedRole || "")
      .trim()
      .toLowerCase()
      .replace(/[\s-]+/g, "_");
    if (!r) return "store";
    return r;
  }

  /** Same agent answer as Web UI; append structured payload when present (WhatsApp text limit ~4096). */
  private formatWhatsAppAgentReply(answer: unknown, structured: unknown): string {
    const main = String(answer ?? "").trim();
    if (structured === null || structured === undefined) {
      return main || " ";
    }
    let extra: string;
    try {
      extra =
        typeof structured === "string"
          ? structured
          : JSON.stringify(structured, null, 2);
    } catch {
      extra = String(structured);
    }
    const sep = "\n\n—\n";
    const combined = main + sep + extra;
    const max = 4090;
    if (combined.length <= max) return combined;
    const budget = max - main.length - sep.length - 20;
    if (budget < 80) return main.slice(0, max - 3) + "...";
    return main + sep + extra.slice(0, budget) + "\n…";
  }

  private isIndividualWhatsAppUser(role: string): boolean {
    const raw = String(role || "").trim();
    if (!raw) return false;
    const normalized = raw.toUpperCase().replace(/[\s-]+/g, "_");

    return (
      normalized === "INDIVIDUAL_WHATSAPP_USER" ||
      // Common typo variants (single P / missing letter)
      normalized === "INDIVIDUAL_WHATSAP_USER" ||
      normalized === "INVIDIAL_WHATSAPP_USER"
    );
  }

  // Optional fallback for development/test: treat WHATSAPP_TEST_NUMBER as "individual"
  // so we don't hit semantic-cache/DB during voice STT->text flows.
  private isIndividualWhatsAppTestUser(from: string): boolean {
    const testNumber = process.env.WHATSAPP_TEST_NUMBER;
    if (!testNumber) return false;

    const fromDigits = String(from || "").replace(/\D/g, "");
    const testDigits = String(testNumber || "").replace(/\D/g, "");
    return !!fromDigits && !!testDigits && fromDigits === testDigits;
  }

  /**
   * Optional: comma-separated WhatsApp sender IDs (digits only) that should use
   * STT → text only (no semantic cache / Prisma). Same intent as INDIVIDUAL_WHATSAPP_USER
   * when you do not use WHATSAPP_PHONE_ROLES JSON.
   * Example: WHATSAPP_INDIVIDUAL_PHONES=918086076193,9198xxxxxxx
   */
  private isListedIndividualPhone(from: string): boolean {
    const raw = process.env.WHATSAPP_INDIVIDUAL_PHONES?.trim();
    if (!raw) return false;
    const fromDigits = String(from || "").replace(/\D/g, "");
    if (!fromDigits) return false;
    const parts = raw
      .split(/[,;\s]+/)
      .map((p) => p.replace(/\D/g, ""))
      .filter(Boolean);
    return parts.some(
      (p) => fromDigits === p || fromDigits.endsWith(p) || p.endsWith(fromDigits)
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
    const roleApiUrl = this.userRoleService.getRoleLookupUrl(from);
    if (roleApiUrl) {
      console.log("[webhook][whatsapp] role API URL:", roleApiUrl);
    } else {
      console.log(
        "[webhook][whatsapp] role API URL not configured (AUTH_API_BASE_URL is empty)"
      );
    }
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

        const individual =
          this.isIndividualWhatsAppUser(userRole) ||
          this.isIndividualWhatsAppTestUser(from) ||
          this.isListedIndividualPhone(from);
        if (individual) {
          const transcript = await this.sarvam.stt(filePath);
          await this.whatsapp.sendText(
            from,
            transcript || "Sorry, could not transcribe the audio."
          );
          console.log(
            "✅ Sent transcript text for INDIVIDUAL_WHATSAPP_USER (voice STT->text)"
          );
          return;
        }

        const result = await this.askService.handleVoice(file, "female");
        console.log("🎵 handleVoice result:", result);

        if (!result || !result.audio_url) {
          console.error("❌ No audio URL returned from handleVoice");
          return;
        }

        let audioPath = result.audio_url.startsWith("/")
          ? result.audio_url.substring(1)
          : result.audio_url;
        // Defensive: legacy bug doubled `audio/` → `audio/audio/tts_...`
        audioPath = audioPath.replace(/^audio\/audio\//, "audio/");

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

        // Same LangGraph /agent path as Web UI POST /ask (memory → entity → intent_router → faq|knowledge|action|fallback).
        const agentRole = this.roleForAgent(userRole);
        const result = await this.askService.ask(msg.text.body, {
          userId: `wa_${from}`,
          role: agentRole,
        });
        console.log("[webhook][whatsapp:text] agent answer preview:", String(result?.answer ?? "").slice(0, 160));
        if (result?.structured != null) {
          console.log("[webhook][whatsapp:text] agent structured payload present");
        }

        const outbound = this.formatWhatsAppAgentReply(result.answer, result.structured);
        await this.whatsapp.sendText(from, outbound);
        console.log("✅ Text reply sent (via ai-agent /agent, same as Web UI)");
      } catch (textError: any) {
        console.error("❌ Error processing text:", textError.message);
      }
      return;
    }

    console.log("⚠️  Unhandled message type:", msg.type);
  }
}
