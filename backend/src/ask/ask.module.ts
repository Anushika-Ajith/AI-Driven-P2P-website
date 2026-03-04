import { Module } from "@nestjs/common";
import { AskController } from "./ask.controller";
import { AskService } from "./ask.service";

import { OpenAIModule } from "../openai/openai.module";
import { SarvamModule } from "../sarvam/sarvam.module";
import { VectorModule } from "../vector/vector.module";

@Module({
  imports: [
    OpenAIModule,
    SarvamModule,
    VectorModule   // ⭐ THIS IS THE FIX
  ],
  controllers: [AskController],
  providers: [AskService],
})
export class AskModule {}