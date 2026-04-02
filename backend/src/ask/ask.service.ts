// import { Injectable } from "@nestjs/common";
// import { OpenAIService } from "../openai/openai.service";
// import * as fs from "fs";
// import { SarvamService } from "../sarvam/sarvam.service";
// @Injectable()
// export class AskService {
//   constructor(private readonly openAI: OpenAIService) {}

//   async ask(question: string) {
//     const finalTranslatedText = await this.openAI.ask(question);

//     // 🔥 OVERRIDE RETURN — always return translated text only
//     return {
//       answer: String(finalTranslatedText).trim(),  // <-- what frontend shows
//     };
//   }
  

// constructor(
//   private readonly openAI: OpenAIService,
//   private readonly sarvam: SarvamService
// ) {}

// async handleVoice(file: Express.Multer.File) {
//   const tempPath = `audio/input_${Date.now()}.webm`;
//   fs.writeFileSync(tempPath, file.buffer);

//   // 1) STT
//   const text = await this.sarvam.stt(tempPath);

//   // 2) LLM answer
//   const answerText = await this.openAI.ask(text);

//   // 3) TTS output
//   const audioFile = await this.sarvam.tts(answerText, "en-IN");

//   return {
//     question_text: text,
//     answer_text: answerText,
//     audio_url: `/audio/${audioFile}`
//   };
// }
// }


import { Injectable } from "@nestjs/common";
import { OpenAIService } from "../openai/openai.service";
import { SarvamService } from "../sarvam/sarvam.service";
import * as fs from "fs";
import { Express } from "express";  // ✔ Correct import
import { VectorService } from "../vector/vector.service";
import axios from "axios";

export type AskAgentOptions = {
  userId?: string;
  /** Passed to LangGraph as user_role (e.g. store, manager). */
  role?: string;
};

@Injectable()
export class AskService {
  constructor(
    private readonly openAI: OpenAIService,
    private readonly sarvam: SarvamService,
    private readonly vector: VectorService
  ) {}

  private agentUrl(): string {
    const raw = (process.env.AI_AGENT_URL || "http://127.0.0.1:8000").trim();
    const base = raw.replace(/\/$/, "");
    if (base.endsWith("/agent")) return base;
    return `${base}/agent`;
  }

  async ask(question: string, options?: AskAgentOptions) {
    const userId = options?.userId ?? "ui_user";
    const role = options?.role ?? "store";

  try {
    const url = this.agentUrl();
    console.log("[ASK][pipeline][2/nest:service] AskService.ask — received question");
    console.log("[ASK][pipeline][3/nest:service] Calling ai-agent POST", url, {
      user_id: userId,
      role,
      message: question,
    });

    const res = await axios.post(url, {
      user_id: userId,
      role,
      message: question
    });
    console.log("[ASK][pipeline][4/nest:service] ai-agent HTTP response OK");
    console.log("[ASK][pipeline][4/nest:service] response.preview:", String(res.data?.response ?? "").slice(0, 200));
    console.log("[ASK][pipeline][4/nest:service] has structured:", res.data?.structured != null);

    return {
      answer: res.data.response,
      structured: res.data.structured ?? null,
    };

  } catch (error) {

    console.error("[ASK][pipeline][error/nest:service] ai-agent request failed:", error);

    return {
      answer: "AI service error"
    };

  }
}

//   async handleVoice(
//   file: any,
//   gender: "male" | "female" = "female"
// ) {
//   // save input audio
//   const tempPath = `audio/input_${Date.now()}.webm`;
//   fs.writeFileSync(tempPath, file.buffer);

//   // 1️⃣ Speech → Text
//   const text = await this.sarvam.stt(tempPath);

//   console.log("VOICE TEXT:", text);

//   // 2️⃣ Generate embedding
//   const embedding = await this.vector.embed(text);

//   // 3️⃣ Semantic search
//   // 3️⃣ Semantic search
// const candidates = await this.vector.searchSimilar(embedding);

// if (candidates && candidates.length > 0) {

//   console.log("⚡ VOICE CACHE HIT");

//   const best = candidates[0];

//   // If audio already stored → return audio directly
//   if (best.answer_audio_url) {
//     return {
//       audio_url: best.answer_audio_url
//     };
//   }

//   // If audio not stored → generate once
//   const audioFile = await this.sarvam.tts(best.answer_text, "en-IN", gender);

//   return {
//     audio_url: `/audio/${audioFile}`
//   };
// }

//   console.log("❌ VOICE CACHE MISS");

//   // 4️⃣ Ask OpenAI
//   const answerText = await this.openAI.ask(text,false);

//   // 5️⃣ Generate TTS
//   const audioFile = await this.sarvam.tts(answerText, "en-IN", gender);

//   const answerAudioPath = `audio/${audioFile}`;

//   // 6️⃣ Store in DB
//  const best = candidates?.[0];

// // check if EXACT text match exists
// if (!best || best.question_text.toLowerCase().trim() !== text.toLowerCase().trim()) {

//   console.log("💾 Storing new semantic question variant");

//   await this.vector.store({
//     questionText: text,
//     questionAudioUrl: tempPath,
//     answerText: best?.answer_text || answerText,
//     answerAudioUrl: best?.answer_audio_url || answerAudioPath,
//     embedding
//   });

// } else {
//   console.log("⚡ Exact question already exists → skip storing");
// }

//   return {
//     // question_text: text,
//     // answer_text: answerText,
//     audio_url: `/audio/${audioFile}`
//   };
// }


async handleVoice(
  file: any,
  gender: "male" | "female" = "female"
) {

  // 1️⃣ Save audio
  const tempPath = `audio/input_${Date.now()}.webm`;
  fs.writeFileSync(tempPath, file.buffer);

  // 2️⃣ Speech → Text
  const text = await this.sarvam.stt(tempPath);
  console.log("VOICE TEXT:", text);

  // 3️⃣ Generate embedding
  const embedding = await this.vector.embed(text);

  // 4️⃣ Semantic search
  const candidates = await this.vector.searchSimilar(embedding);
const best = candidates?.[0];

// ------------------------------------------------
// 🎯 CACHE HIT (only if similarity is good)
// ------------------------------------------------
if (best && best.distance < 0.45) {

  console.log("⚡ VOICE CACHE HIT");
  console.log("Distance:", best.distance);

  // If audio already exists → return directly
  if (best.answer_audio_url) {

    console.log("🎧 Returning audio from DB");

    return {
      audio_url: best.answer_audio_url
    };
  }

  // If audio missing → generate once
  console.log("🔊 Audio missing → generating TTS");

  const audioFile = await this.sarvam.tts(best.answer_text, "en-IN", gender);

  return {
    audio_url: `/audio/${audioFile}`
  };
}

// ------------------------------------------------
// ❌ CACHE MISS
// ------------------------------------------------

console.log("❌ VOICE CACHE MISS");

// Ask LLM
const answerText = await this.openAI.ask(text, false);

// Generate voice
const audioFile = await this.sarvam.tts(answerText, "en-IN", gender);

const answerAudioPath = `/audio/${audioFile}`;

// Store in DB
await this.vector.store({
  questionText: text,
  questionAudioUrl: tempPath,
  answerText: answerText,
  answerAudioUrl: answerAudioPath,
  embedding
});

console.log("💾 Stored new voice question");

return {
  audio_url: answerAudioPath
};
}


}