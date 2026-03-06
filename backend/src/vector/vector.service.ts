import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class VectorService {
  private client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  constructor(private prisma: PrismaService) {}

  // ------------------------------------------------
  // Generate embedding using OpenAI
  // ------------------------------------------------
  async embed(text: string): Promise<number[]> {
    const result = await this.client.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });

    return result.data[0].embedding;
  }

  // ------------------------------------------------
  // Semantic similarity search
  // ------------------------------------------------
  async searchSimilar(embedding: number[]) {
  const vector = `[${embedding.join(",")}]`;

  const result: any[] = await this.prisma.$queryRawUnsafe(
    `
    SELECT
question_text,
answer_text,
answer_audio_url,
embedding <=> $1::vector AS distance
FROM semantic_cache
ORDER BY distance ASC
LIMIT 1
    `,
    vector
  );

  if (!result.length) return null;

  console.log("Top candidates:", result);

  return result;
}

  // ------------------------------------------------
  // Store question + answer in vector DB
  // ------------------------------------------------
  async store(params: {
  questionText: string;
  questionAudioUrl?: string;
  answerText: string;
  answerAudioUrl?: string;
  embedding: number[];
}) {

  const vector = `[${params.embedding.join(",")}]`;

  await this.prisma.$executeRawUnsafe(
    `
    INSERT INTO semantic_cache
    (question_text, question_audio_url, answer_text, answer_audio_url, embedding)
    VALUES ($1,$2,$3,$4,$5::vector)
    `,
    params.questionText,
    params.questionAudioUrl ?? null,
    params.answerText,
    params.answerAudioUrl ?? null,
    vector
  );
}
}