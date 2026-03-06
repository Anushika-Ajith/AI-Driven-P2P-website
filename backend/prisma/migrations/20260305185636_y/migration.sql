-- CreateTable
CREATE TABLE "semantic_cache" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "question_text" TEXT NOT NULL,
    "question_audio_url" TEXT,
    "embedding" vector NOT NULL,
    "answer_text" TEXT NOT NULL,
    "answer_audio_url" TEXT,
    "hit_count" INTEGER DEFAULT 0,
    "last_used_at" TIMESTAMP(6),
    "source" VARCHAR(50) DEFAULT 'website',
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "semantic_cache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "semantic_cache_embedding_idx" ON "semantic_cache"("embedding");
