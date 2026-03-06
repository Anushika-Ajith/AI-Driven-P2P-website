import { Module } from "@nestjs/common";
import { WebhookController } from "./webhook.controller";
import { WhatsAppModule } from "../whatsapp/whatsapp.module";
import { SarvamModule } from "../sarvam/sarvam.module";
import { OpenAIModule } from "../openai/openai.module";
import { AskModule } from "../ask/ask.module";

@Module({
  imports: [WhatsAppModule, SarvamModule, OpenAIModule, AskModule],
  controllers: [WebhookController],
})
export class WebhookModule {}