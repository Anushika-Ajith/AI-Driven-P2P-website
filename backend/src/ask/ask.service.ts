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

@Injectable()
export class AskService {
  constructor(
    private readonly openAI: OpenAIService,
    private readonly sarvam: SarvamService
  ) {}

  async ask(question: string) {
    const finalTranslatedText = await this.openAI.ask(question);

    return {
      answer: String(finalTranslatedText).trim(),
    };
  }

  async handleVoice(
    file: any,
    gender: "male" | "female" = "female" // ⭐ you can set default voice here
  ) {
    const tempPath = `audio/input_${Date.now()}.webm`;
    fs.writeFileSync(tempPath, file.buffer);

    // 1) Speech → Text
    const text = await this.sarvam.stt(tempPath);

    // 2) LLM Answer
    const answerText = await this.openAI.ask(text);

    // 3) Text → Speech (with gender support)
    const audioFile = await this.sarvam.tts(answerText, "en-IN", gender);

    return {
      question_text: text,
      answer_text: answerText,
      audio_url: `/audio/${audioFile}`,
    };
  }
}