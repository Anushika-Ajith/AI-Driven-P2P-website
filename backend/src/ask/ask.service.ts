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

@Injectable()
export class AskService {
  constructor(
    private readonly openAI: OpenAIService,
    private readonly sarvam: SarvamService,
    private readonly vector: VectorService
  ) {}

  async ask(question: string) {
    const finalTranslatedText = await this.openAI.ask(question);

    return {
      answer: String(finalTranslatedText).trim(),
    };
  }

  async handleVoice(
  file: any,
  gender: "male" | "female" = "female"
) {
  // save input audio
  const tempPath = `audio/input_${Date.now()}.webm`;
  fs.writeFileSync(tempPath, file.buffer);

  // 1️⃣ Speech → Text
  const text = await this.sarvam.stt(tempPath);

  console.log("VOICE TEXT:", text);

  // 2️⃣ Generate embedding
  const embedding = await this.vector.embed(text);

  // 3️⃣ Semantic search
  // 3️⃣ Semantic search
const candidates = await this.vector.searchSimilar(embedding);

if (candidates && candidates.length > 0) {

  const prompt = `
User Question:
${text}

Candidate Questions:
${candidates.map((c,i)=>`${i+1}. ${c.question_text}`).join("\n")}

Return the number of best match or 0.
`;

  const match = await this.openAI["client"].chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0
  });

  const index = parseInt(match.choices?.[0]?.message?.content || "0");

  if (index > 0 && candidates[index - 1]) {

    console.log("⚡ VOICE CACHE HIT");

    // 🚀 RETURN IMMEDIATELY
    return {
      question_text: text,
      answer_text: candidates[index - 1].answer_text,
      audio_url: candidates[index - 1].answer_audio_url
    };
  }
}

  console.log("❌ VOICE CACHE MISS");

  // 4️⃣ Ask OpenAI
  const answerText = await this.openAI.ask(text);

  // 5️⃣ Generate TTS
  const audioFile = await this.sarvam.tts(answerText, "en-IN", gender);

  const answerAudioPath = `audio/${audioFile}`;

  // 6️⃣ Store in DB
  await this.vector.store({
    questionText: text,
    questionAudioUrl: tempPath,
    answerText: answerText,
    answerAudioUrl: answerAudioPath,
    embedding
  });

  return {
    question_text: text,
    answer_text: answerText,
    audio_url: `/audio/${audioFile}`
  };
}
}