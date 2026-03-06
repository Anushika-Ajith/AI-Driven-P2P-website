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
  exports: [AskService],  // Export AskService so other modules can use it
})
export class AskModule {}