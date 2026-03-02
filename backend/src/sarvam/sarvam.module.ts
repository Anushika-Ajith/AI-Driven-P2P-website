import { Module } from "@nestjs/common";
import { SarvamService } from "./sarvam.service";

@Module({
  providers: [SarvamService],
  exports: [SarvamService],   // <--- IMPORTANT
})
export class SarvamModule {}