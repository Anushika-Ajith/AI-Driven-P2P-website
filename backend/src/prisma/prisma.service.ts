// import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
// import { PrismaClient } from "@prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";
// import { Pool } from "pg";

// const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "anjana123",
//   database: "odin_ai",
// });

// const adapter = new PrismaPg(pool);

// @Injectable()
// export class PrismaService
//   extends PrismaClient
//   implements OnModuleInit, OnModuleDestroy
// {
//   constructor() {
//     super({
//       adapter,
//       log: ["query", "error", "warn"],
//     });
//   }

//   async onModuleInit() {
//     await this.$connect();
//     console.log("✅ Prisma connected to database");
//   }

//   async onModuleDestroy() {
//     await this.$disconnect();
//     console.log("❌ Prisma disconnected");
//   }
// }


import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool, type PoolConfig } from "pg";

/** AWS RDS requires TLS; cleartext is rejected with "no encryption". */
function buildPoolConfig(connectionString: string): PoolConfig {
  const disableSsl = process.env.DATABASE_SSL === "false";
  const forceSsl = process.env.DATABASE_SSL === "true";
  const looksLikeAwsRds = /rds\.amazonaws\.com/i.test(connectionString);
  const urlWantsSsl = /[?&]sslmode=(require|verify-full|verify-ca)/i.test(
    connectionString
  );
  const useSsl = !disableSsl && (forceSsl || looksLikeAwsRds || urlWantsSsl);

  return {
    connectionString,
    ...(useSsl ? { ssl: { rejectUnauthorized: false } } : {}),
  };
}

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly pool: Pool;

  constructor() {
    const url = process.env.DATABASE_URL?.trim();
    if (!url) {
      throw new Error(
        "DATABASE_URL is not set. Set it in backend/.env (Postgres or RDS URL)."
      );
    }
    const pool = new Pool(buildPoolConfig(url));
    const adapter = new PrismaPg(pool);
    super({
      adapter,
      log: ["error", "warn"],
    });
    this.pool = pool;
  }

  async onModuleInit() {
    await this.$connect();
    console.log("✅ Prisma connected to database");
  }

  async onModuleDestroy() {
    await this.$disconnect();
    await this.pool.end();
    console.log("❌ Prisma disconnected");
  }
}
