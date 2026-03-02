import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AskModule } from "./ask/ask.module";
import { SarvamModule } from "./sarvam/sarvam.module";
import { OpenAIModule } from "./openai/openai.module";
import { WebhookModule } from "./webhook/webhook.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SarvamModule,        // ⭐ NEW
    OpenAIModule,        // ⭐ NEW
    AskModule,
    WebhookModule,       // ⭐ Webhook module for WhatsApp
  ],
})
export class AppModule {}