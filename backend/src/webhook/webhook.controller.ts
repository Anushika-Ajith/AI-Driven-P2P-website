import { Controller, Post, Body } from "@nestjs/common";
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

  @Post()
  async handle(@Body() body: any) {
    try {
      const msg = body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      const from = msg?.from; // your WhatsApp number

      if (!msg) return "NO MESSAGE";

      // 📌 CASE 1: USER SENDS AUDIO
      if (msg.type === "audio") {
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

        return { status: "Voice reply sent!" };
      }

      // 📌 CASE 2: USER SENDS TEXT
      if (msg.type === "text") {
        const text = msg.text.body;

        const answer = await this.openai.ask(text);

        await this.whatsapp.sendText(from, answer);

        return { status: "Text reply sent!" };
      }

      return "Ignored";
    } catch (err) {
      console.error("WEBHOOK ERROR:", err);
      return "Error";
    }
  }
}