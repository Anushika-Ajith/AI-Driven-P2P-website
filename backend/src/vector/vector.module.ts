import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { VectorService } from "./vector.service";

@Module({
  imports: [PrismaModule],
  providers: [VectorService],
  exports: [VectorService],
})
export class VectorModule {}