import { Module } from "@nestjs/common";
import { WebhookController } from "./webhook.controller";
import { WhatsAppModule } from "../whatsapp/whatsapp.module";
import { SarvamModule } from "../sarvam/sarvam.module";
import { AskModule } from "../ask/ask.module";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [WhatsAppModule, SarvamModule, AskModule, AuthModule],
  controllers: [WebhookController],
})
export class WebhookModule {}