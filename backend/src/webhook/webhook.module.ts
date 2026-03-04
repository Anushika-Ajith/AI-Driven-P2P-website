import { Module } from "@nestjs/common";
import { WebhookController } from "./webhook.controller";
import { WhatsAppModule } from "../whatsapp/whatsapp.module";
import { SarvamModule } from "../sarvam/sarvam.module";
import { OpenAIModule } from "../openai/openai.module";

@Module({
  imports: [WhatsAppModule, SarvamModule, OpenAIModule],
  controllers: [WebhookController],
})
export class WebhookModule {}