import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AskModule } from "./ask/ask.module";
import { SarvamModule } from "./sarvam/sarvam.module";
import { OpenAIModule } from "./openai/openai.module";
import { WebhookModule } from "./webhook/webhook.module";
import { PrismaModule } from "./prisma/prisma.module";
import { VectorModule } from "./vector/vector.module";
import { ApprovalsModule } from "./approvals/approvals.module";
import { RfqModule } from "./rfq/rfq.module";
import { PoModule } from "./po/po.module";
import { FeedbackModule } from "./feedback/feedback.module";
@Module({
  imports: [
    ConfigModule.forRoot(),
    SarvamModule,        // ⭐ NEW
    OpenAIModule,        // ⭐ NEW
    AskModule,
    PrismaModule,
    VectorModule,
    WebhookModule, 
    
    ApprovalsModule,
    RfqModule,
    PoModule,
    FeedbackModule,// ⭐ Webhook module for WhatsApp
  ],
})
export class AppModule {}