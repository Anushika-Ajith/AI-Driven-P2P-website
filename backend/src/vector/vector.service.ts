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
    SELECT id::text, question_text, answer_text, answer_audio_url, embedding <=> $1::vector AS distance
FROM semantic_cache
WHERE embedding <=> $1::vector < 0.25
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
  console.log("💾 Storing question:", params.questionText);
  console.log("💾 Storing answer:", params.answerText);
  console.log("💾 Storing question audio URL:", params.questionAudioUrl);
  console.log("💾 Storing answer audio URL:", params.answerAudioUrl);
  console.log("💾 Storing embedding:", params.embedding);

  // Ensure we have valid values (convert undefined to null for SQL)
  const questionAudioUrl = params.questionAudioUrl !== undefined ? params.questionAudioUrl : null;
  const answerAudioUrl = params.answerAudioUrl !== undefined ? params.answerAudioUrl : null;

  console.log("💾 Final values - questionAudioUrl:", questionAudioUrl, "answerAudioUrl:", answerAudioUrl);

  const vector = `[${params.embedding.join(",")}]`;

  await this.prisma.$executeRawUnsafe(
    `
    INSERT INTO semantic_cache
    (question_text, question_audio_url, answer_text, answer_audio_url, embedding)
    VALUES ($1,$2,$3,$4,$5::vector)
    `,
    params.questionText,
    questionAudioUrl,
    params.answerText,
    answerAudioUrl,
    vector
  );
}

  // ------------------------------------------------
  // Update answer audio URL for existing record
  // ------------------------------------------------
  async updateAudioUrl(id: string, answerAudioUrl: string) {
    console.log("🔄 Updating audio URL for id:", id, "with path:", answerAudioUrl);
    try {
      const result = await this.prisma.semanticCache.update({
        where: { id: id },
        data: {
          answer_audio_url: answerAudioUrl,
          updated_at: new Date(),
        },
      });
      console.log("✅ Update successful. Updated record ID:", result.id, "answer_audio_url:", result.answer_audio_url);
      return result;
    } catch (error) {
      console.error("❌ Error in updateAudioUrl:", error);
      throw error;
    }
  }
}
