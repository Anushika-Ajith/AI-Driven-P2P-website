import { Module } from "@nestjs/common";
import { OpenAIService } from "./openai.service";
import { SarvamModule } from "../sarvam/sarvam.module";
import { VectorModule } from "../vector/vector.module"; 

@Module({
  imports: [SarvamModule,
    VectorModule
  ],
  providers: [OpenAIService],
  exports: [OpenAIService],  // important
})
export class OpenAIModule {}