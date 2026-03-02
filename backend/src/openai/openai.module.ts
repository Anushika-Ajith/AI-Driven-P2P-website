import { Module } from "@nestjs/common";
import { OpenAIService } from "./openai.service";
import { SarvamModule } from "../sarvam/sarvam.module";

@Module({
  imports: [SarvamModule],
  providers: [OpenAIService],
  exports: [OpenAIService],  // important
})
export class OpenAIModule {}