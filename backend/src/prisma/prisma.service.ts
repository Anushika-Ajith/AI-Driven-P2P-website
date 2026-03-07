import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// DB_HOST=whatsapp-chat.cpe4asg46vgp.eu-north-1.rds.amazonaws.com
// DB_PORT=5432
// DB_USER=postgres
// DB_PASSWORD=Postgres21!
// DB_NAME=postgres





const pool = new Pool({
  host: "whatsapp-chat.cpe4asg46vgp.eu-north-1.rds.amazonaws.com",
  port: 5432,
  user: "postgres",
  password: "Postgres21!",
  database: "postgres",
  ssl: {
    rejectUnauthorized: false
  }
});

const adapter = new PrismaPg(pool);

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      adapter,
      log: ["query", "error", "warn"],
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log("✅ Prisma connected to database");
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log("❌ Prisma disconnected");
  }
}