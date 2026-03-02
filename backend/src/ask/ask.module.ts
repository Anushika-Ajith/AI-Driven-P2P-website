import { Module } from "@nestjs/common";
import { AskService } from "./ask.service";
import { AskController } from "./ask.controller";
import { OpenAIModule } from "../openai/openai.module";
import { SarvamModule } from "../sarvam/sarvam.module";  // ⭐ ADD THIS

@Module({
  imports: [OpenAIModule, SarvamModule],   // ⭐ FIX
  providers: [AskService],
  controllers: [AskController],
})
export class AskModule {}