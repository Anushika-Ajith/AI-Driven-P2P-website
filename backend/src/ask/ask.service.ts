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
  console.log("🎵 handleVoice called with gender:", gender);
  // 1️⃣ Save audio
  const tempPath = `audio/input_${Date.now()}.webm`;
  fs.writeFileSync(tempPath, file.buffer);
  console.log("💾 Saved audio to:", tempPath);
  // 2️⃣ Speech → Text
  const text = await this.sarvam.stt(tempPath);
  console.log("VOICE TEXT:", text);

  const textLower = text.toLowerCase().trim();
  
  // Handle greetings in audio
  const greetings = ["hi", "hello", "hey", "hey there", "hi there", "greetings", "good morning", "good afternoon", "good evening"];
  if (greetings.includes(textLower)) {
    const greetingMessage = "Hello! How can I help you today?";
    const greetingAudioFile = await this.sarvam.tts(greetingMessage, "en-IN", gender);
    return {
      audio_url: `/${greetingAudioFile}`
    };
  }

  // Check if question is relevant to ODIN domain
  const isRelevant = await this.openAI.isRelevantToDomain(text);
  
  if (!isRelevant) {
    console.log("⚠️ Non-relevant audio question detected");
    const fallbackMessage = "Sorry, please ask questions related to ODIN Technologies, procurement, P2P workflows, vendor management, or document processing.";
    // Generate audio for fallback message
    const fallbackAudioFile = await this.sarvam.tts(fallbackMessage, "en-IN", gender);
    return {
      audio_url: `/${fallbackAudioFile}`
    };
  }

  // 3️⃣ Generate embedding
  const embedding = await this.vector.embed(text);

  // 4️⃣ Semantic search
  const candidates = await this.vector.searchSimilar(embedding);

let best: any = null;
console.log("🔍 Candidates:", candidates);
console.log("embedding:", embedding);


  if (candidates && candidates.length > 0) {

    best = candidates[0];

    console.log("⚡ VOICE CACHE HIT");

    if (!best) {
  console.log("❌ No candidate found");
  return;
}

const isExact =
  best.question_text.toLowerCase().trim() ===
  text.toLowerCase().trim();

    // return stored audio if it exists
    if (best.answer_audio_url) {
      // Store semantic variant if different text (but audio already exists)
      if (!isExact) {
        console.log("💾 Storing semantic question variant");
        console.log("📝 Values - questionAudioUrl:", tempPath, "answerAudioUrl:", best.answer_audio_url);
        await this.vector.store({
          questionText: text,
          questionAudioUrl: tempPath,
          answerText: best.answer_text,
          answerAudioUrl: best.answer_audio_url,
          embedding
        });
      } else {
        console.log("⚡ Exact question already exists → skip storing");
      }
      
      return {
        audio_url: best.answer_audio_url
      };
    }

    // generate audio once if missing
    console.log("🎵 Generating audio for missing answer_audio_url");
    const audioFile = await this.sarvam.tts(best.answer_text, "en-IN", gender);
    // audioFile already includes "audio/" prefix (e.g., "audio/tts_1234567890.mp3")
    // Normalize to ensure it's exactly "audio/filename.mp3" format
    const answerAudioPath = audioFile.startsWith("audio/") ? audioFile : `audio/${audioFile}`;
    console.log("💾 Generated audio path:", answerAudioPath);

    // Save the generated audio URL to the original best record
    console.log("🔍 Best record ID:", best.id, "Type:", typeof best.id);
    if (best.id) {
      try {
        await this.vector.updateAudioUrl(best.id, answerAudioPath);
        console.log("💾 Saved generated audio URL to database for record:", best.id);
      } catch (error) {
        console.error("❌ Error saving audio URL:", error);
        throw error;
      }
    } else {
      console.warn("⚠️ No ID found in best record, cannot update audio URL");
    }

    // Store semantic variant if different text (with the newly generated audio)
    if (!isExact) {
      console.log("💾 Storing semantic question variant with generated audio");
      console.log("📝 Values - questionAudioUrl:", tempPath, "answerAudioUrl:", answerAudioPath);
      await this.vector.store({
        questionText: text,
        questionAudioUrl: tempPath,
        answerText: best.answer_text,
        answerAudioUrl: answerAudioPath,
        embedding
      });
    }

    return {
      audio_url: `/${audioFile}`
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
  // audioFile already includes "audio/" prefix (e.g., "audio/tts_1234567890.mp3")
  // Normalize to ensure it's exactly "audio/filename.mp3" format
  const answerAudioPath = audioFile.startsWith("audio/") ? audioFile : `audio/${audioFile}`;
  console.log("💾 Generated audio path:", answerAudioPath);

  // Store new question
  console.log("📝 Values - questionAudioUrl:", tempPath, "answerAudioUrl:", answerAudioPath);
  await this.vector.store({
    questionText: text,
    questionAudioUrl: tempPath,
    answerText: answerText,
    answerAudioUrl: answerAudioPath,
    embedding
  });

  console.log("💾 Stored new voice query");

  return {
    audio_url: `/${audioFile}`
  };
}


}