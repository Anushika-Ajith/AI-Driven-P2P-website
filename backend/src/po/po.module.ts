import { Module } from "@nestjs/common";
import { PoController } from "./po.controller";

@Module({
  controllers: [PoController],
})
export class PoModule {}