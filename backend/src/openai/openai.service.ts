import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { SarvamService } from "../sarvam/sarvam.service";
import { loadKnowledgeBase } from "../../data/source";
type SarvamTranslation =
  | string
  | {
      translated_text?: string;
      text?: string;
      output?: string;
    };
@Injectable()
export class OpenAIService {
  private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  private knowledge: string;

  constructor(private sarvam: SarvamService) {
    this.knowledge = loadKnowledgeBase();
  }

  // ------------------------------------------------
  // Strict language detection
  // ------------------------------------------------
  async detectLanguage(text: string): Promise<string> {
    const res = await this.client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Return only language ISO code (en, hi, ml, ta, te, gu, kn).
Text: "${text}"`
        }
      ],
      temperature: 0
    });

    return res.choices?.[0]?.message?.content?.trim().toLowerCase() || "en";
  }

  // ------------------------------------------------
  // Split long text for Sarvam’s 1000-char limit
  // ------------------------------------------------
  async chunkTranslate(text: string, from: string, to: string) {
  if (from === to) return text;

  const chunks = text.match(/.{1,900}/gs) ?? [];
  let final = "";

  for (const part of chunks) {
    const translated = await this.sarvam.translate(part, to, from) as SarvamTranslation;

    let textPart = "";

    if (typeof translated === "object" && translated !== null) {
      textPart =
        translated.translated_text ||
        translated.text ||
        translated.output ||
        "";
    } else {
      textPart = String(translated);
    }

    final += textPart + " ";
  }

  return final.trim();
}

  // ------------------------------------------------
  // MAIN ASK
  // ------------------------------------------------
  async ask(question: string): Promise<string> {
    // 1) Detect language
    const userLang = await this.detectLanguage(question);
    console.log("LANG:", userLang);

    // Map ISO → Sarvam codes
    const MAP: any = {
      en: "en-IN",
      hi: "hi-IN",
      ml: "ml-IN",
      ta: "ta-IN",
      te: "te-IN",
      gu: "gu-IN",
      kn: "kn-IN"
    };

    const src = MAP[userLang] || "auto";

    // 2) Translate question → English
    const qEnglish = await this.chunkTranslate(question, src, "en-IN");

    // 3) Ask OpenAI in English
    const prompt = `
You are ODIN Assistant. Use ONLY ODIN knowledge below to answer.
Write clean natural paragraphs. No bullets. No markdown.for all language the name "ODIN" should not be changed.


KNOWLEDGE:
${this.knowledge}

QUESTION:
${qEnglish}

ANSWER:
    `;

    const res = await this.client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.2
    });

    const englishAnswer =
  res.choices?.[0]?.message?.content?.trim() || "No answer available.";
// 4) Translate back → user language
const target = MAP[userLang] || "hi-IN";
let finalAnswer = await this.chunkTranslate(englishAnswer, "en-IN", target);

// ✅ Always extract text safely
if (typeof finalAnswer === "object" && finalAnswer !== null) {
  finalAnswer =
    (finalAnswer as any).translated_text ||
    (finalAnswer as any).text ||
    (finalAnswer as any).output ||
    "";
}

// 🚨 If Sarvam returned nothing, avoid blank frontend
if (!finalAnswer || finalAnswer.trim() === "") {
  finalAnswer = "⚠ Translation failed. Try again.";
}

// ⭐ ALWAYS RETURN TRANSLATED TEXT ONLY
return finalAnswer;   
  }
}