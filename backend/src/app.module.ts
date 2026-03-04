import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AskModule } from "./ask/ask.module";
import { SarvamModule } from "./sarvam/sarvam.module";
import { OpenAIModule } from "./openai/openai.module";
import { WebhookModule } from "./webhook/webhook.module";
import { PrismaModule } from "./prisma/prisma.module";
import { VectorModule } from "./vector/vector.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    SarvamModule,        // ⭐ NEW
    OpenAIModule,        // ⭐ NEW
    AskModule,
    PrismaModule,
    VectorModule,
    WebhookModule,       // ⭐ Webhook module for WhatsApp
  ],
})
export class AppModule {}