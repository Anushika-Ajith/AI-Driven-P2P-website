// import { Injectable } from "@nestjs/common";
// import OpenAI from "openai";
// import { SarvamService } from "../sarvam/sarvam.service";
// import { loadKnowledgeBase } from "../../data/source";
// import { VectorService } from "src/vector/vector.service";
// type SarvamTranslation =
//   | string
//   | {
//       translated_text?: string;
//       text?: string;
//       output?: string;
//     };
// @Injectable()
// export class OpenAIService {
//   private client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//   private knowledge: string;

//   constructor(private sarvam: SarvamService,
//     private vector: VectorService
//   ) {
//     this.knowledge = loadKnowledgeBase();
//   }

//   /**
//    * Fast path: procurement / P2P phrasing that must not depend on LLM flakiness (e.g. AWS).
//    * Keeps the semantic gate for everything else.
//    */
//   private matchesProcurementKeywordHint(text: string): boolean {
//     const t = text.toLowerCase();
//     const patterns: RegExp[] = [
//       /\b(?:pending|my|show|list|get|what\s+are)\s+(?:the\s+)?(?:my\s+)?(?:pending\s+)?approvals?\b/,
//       /\bapprovals?\s+(?:pending|due|waiting|list|queue)\b/,
//       /\b(?:requisition|requisitions|rfq|rfp|grn|purchase\s+order|p\.?\s*o\.?|invoice|invoices|vendor|vendors|supplier|suppliers|procurement|procure|p2p|procure-to-pay|accounts\s+payable|goods\s+receipt)\b/,
//       /\b(?:odin|erp|purchase|pr\s+creation|purchase\s+request)\b/,
//     ];
//     return patterns.some((re) => re.test(t));
//   }

//   /** Returns true if the message is plausibly about ODIN / P2P / procurement (for WhatsApp guardrails). */
//   async isRelevantToDomain(message: string): Promise<boolean> {
//     const trimmed = String(message || "").trim();
//     if (!trimmed) return false;

//     if (this.matchesProcurementKeywordHint(trimmed)) {
//       return true;
//     }

//     const res = await this.client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "system",
//           content: `You are a strict classifier. Reply with exactly one word: YES or NO.

// YES = the message is about business/procurement work: ODIN Technologies, procurement, procure-to-pay (P2P), accounts payable, approval workflows, pending or listed approvals, requisitions, RFQ/RFP, purchase orders (PO), vendors/suppliers, invoices, GRN, ERP, business document processing, or the assistant named ODIN.

// NO = small talk, personal life, unrelated tech, jokes, or topics clearly outside procurement/finance operations.`,
//         },
//         { role: "user", content: trimmed },
//       ],
//       temperature: 0,
//       max_tokens: 8,
//     });

//     const raw = res.choices?.[0]?.message?.content?.trim().toUpperCase() || "";
//     const firstWord = raw.split(/\s+/)[0] ?? "";
//     return firstWord.startsWith("Y");
//   }

//   // ------------------------------------------------
//   // Strict language detection
//   // ------------------------------------------------
//   async detectLanguage(text: string): Promise<string> {
//     const res = await this.client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [
//         {
//           role: "user",
//           content: `Return only language ISO code (en, hi, ml, ta, te, gu, kn).
// Text: "${text}"`
//         }
//       ],
//       temperature: 0
//     });

//     return res.choices?.[0]?.message?.content?.trim().toLowerCase() || "en";
//   }

//   // ------------------------------------------------
//   // Split long text for Sarvam’s 1000-char limit
//   // ------------------------------------------------
//   async chunkTranslate(text: string, from: string, to: string) {
//   if (from === to) return text;

//   const chunks = text.match(/.{1,900}/gs) ?? [];
//   let final = "";

//   for (const part of chunks) {
//     const translated = await this.sarvam.translate(part, to, from) as SarvamTranslation;

//     let textPart = "";

//     if (typeof translated === "object" && translated !== null) {
//       textPart =
//         translated.translated_text ||
//         translated.text ||
//         translated.output ||
//         "";
//     } else {
//       textPart = String(translated);
//     }

//     final += textPart + " ";
//   }

//   return final.trim();
// }

//   // ------------------------------------------------
//   // MAIN ASK
//   // ------------------------------------------------
//   async ask(question: string, store: boolean = true): Promise<string> {
//     // 1) Detect language
//     const userLang = await this.detectLanguage(question);
//     console.log("LANG:", userLang);

//     // Map ISO → Sarvam codes
//     const MAP: any = {
//       en: "en-IN",
//       hi: "hi-IN",
//       ml: "ml-IN",
//       ta: "ta-IN",
//       te: "te-IN",
//       gu: "gu-IN",
//       kn: "kn-IN"
//     };

//     const src = MAP[userLang] || "auto";

//     // 2) Translate question → English
//     const qEnglish = await this.chunkTranslate(question, src, "en-IN");

//     // Step 2: embed
//   const embedding = await this.vector.embed(qEnglish);

//   // Step 3: similarity search
//   const candidates = await this.vector.searchSimilar(embedding);

// if (candidates && candidates.length > 0) {
//   console.log("⚡ Vector Cache HIT");
//   return candidates[0].answer_text;
// }

//   console.log("❌ Cache MISS - asking OpenAI");
//     // 3) Ask OpenAI in English
//     const prompt = `
// You are ODIN, an intelligent assistant with a friendly conversational tone.
// Speak naturally — like talking to a person — not formal, not robotic.
// Do not use bullet points or markdown.
// Always keep the name "ODIN" exactly as it is in all languages.
// Use ONLY the ODIN knowledge provided below to answer.
// If you don't find the answer in the knowledge base, reply honestly but still conversationally.

// KNOWLEDGE:
// ${this.knowledge}

// QUESTION:
// ${qEnglish}

// ANSWER:
// `;

//     const res = await this.client.chat.completions.create({
//       model: "gpt-4o-mini",
//       messages: [{ role: "user", content: prompt }],
//       temperature: 0.2
//     });

//     const englishAnswer =
//   res.choices?.[0]?.message?.content?.trim() || "No answer available.";

//   // Step 5: Store in cache
//   // Store only if this is text input
// if (store) {

//   const best = candidates?.[0];

//   // store only if no exact match
//   if (!best || best.distance !== 0) {

//     await this.vector.store({
//       questionText: qEnglish,
//       answerText: englishAnswer,
//       embedding,
//     });

//     console.log("💾 Stored new text query in DB");

//   } else {
//     console.log("⚡ Exact match found — skipping DB store");
//   }
// }
  
// // 4) Translate back → user language
// const target = MAP[userLang] || "hi-IN";
// let finalAnswer = await this.chunkTranslate(englishAnswer, "en-IN", target);

// // ✅ Always extract text safely
// if (typeof finalAnswer === "object" && finalAnswer !== null) {
//   finalAnswer =
//     (finalAnswer as any).translated_text ||
//     (finalAnswer as any).text ||
//     (finalAnswer as any).output ||
//     "";
// }

// // 🚨 If Sarvam returned nothing, avoid blank frontend
// if (!finalAnswer || finalAnswer.trim() === "") {
//   finalAnswer = "⚠ Translation failed. Try again.";
// }

// // ⭐ ALWAYS RETURN TRANSLATED TEXT ONLY
// return finalAnswer;   
//   }
// }


import { Injectable } from "@nestjs/common";
import OpenAI from "openai";
import { SarvamService } from "../sarvam/sarvam.service";
import { loadKnowledgeBase } from "../../data/source";
import { VectorService } from "src/vector/vector.service";
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

  constructor(private sarvam: SarvamService,
    private vector: VectorService
  ) {
    this.knowledge = loadKnowledgeBase();
  }

  /**
   * Fast path: procurement / P2P phrasing that must not depend on LLM flakiness (e.g. AWS).
   * Keeps the semantic gate for everything else.
   */
  private matchesProcurementKeywordHint(text: string): boolean {
    const t = text.toLowerCase();
    const patterns: RegExp[] = [
      /\b(?:pending|my|show|list|get|what\s+are)\s+(?:the\s+)?(?:my\s+)?(?:pending\s+)?approvals?\b/,
      /\bapprovals?\s+(?:pending|due|waiting|list|queue)\b/,
      /\b(?:requisition|requisitions|rfq|rfp|grn|purchase\s+order|p\.?\s*o\.?|invoice|invoices|vendor|vendors|supplier|suppliers|procurement|procure|p2p|procure-to-pay|accounts\s+payable|goods\s+receipt)\b/,
      /\b(?:odin|erp|purchase|pr\s+creation|purchase\s+request)\b/,
    ];
    return patterns.some((re) => re.test(t));
  }

  /** Returns true if the message is plausibly about ODIN / P2P / procurement (for WhatsApp guardrails). */
  async isRelevantToDomain(message: string): Promise<boolean> {
    const trimmed = String(message || "").trim();
    if (!trimmed) return false;

    if (this.matchesProcurementKeywordHint(trimmed)) {
      return true;
    }

    const res = await this.client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a strict classifier. Reply with exactly one word: YES or NO.

YES = the message is about business/procurement work: ODIN Technologies, procurement, procure-to-pay (P2P), accounts payable, approval workflows, pending or listed approvals, requisitions, RFQ/RFP, purchase orders (PO), vendors/suppliers, invoices, GRN, ERP, business document processing, or the assistant named ODIN.

NO = small talk, personal life, unrelated tech, jokes, or topics clearly outside procurement/finance operations.`,
        },
        { role: "user", content: trimmed },
      ],
      temperature: 0,
      max_tokens: 8,
    });

    const raw = res.choices?.[0]?.message?.content?.trim().toUpperCase() || "";
    const firstWord = raw.split(/\s+/)[0] ?? "";
    return firstWord.startsWith("Y");
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
  async ask(question: string, store: boolean = true): Promise<string> {
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

    // Step 2: embed
  const embedding = await this.vector.embed(qEnglish);

  // Step 3: similarity search (DB optional)
  let candidates: Awaited<ReturnType<VectorService["searchSimilar"]>> = null;
  try {
    candidates = await this.vector.searchSimilar(embedding);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    console.warn("[OpenAIService.ask] semantic_cache search skipped:", msg);
  }

if (candidates && candidates.length > 0) {
  console.log("⚡ Vector Cache HIT");
  return candidates[0].answer_text;
}

  console.log("❌ Cache MISS - asking OpenAI");
    // 3) Ask OpenAI in English
    const prompt = `
You are ODIN, an intelligent assistant with a friendly conversational tone.
Speak naturally — like talking to a person — not formal, not robotic.
Do not use bullet points or markdown.
Always keep the name "ODIN" exactly as it is in all languages.
Use ONLY the ODIN knowledge provided below to answer.
If you don't find the answer in the knowledge base, reply honestly but still conversationally.

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

  // Step 5: Store in cache
  // Store only if this is text input
if (store) {

  const best = candidates?.[0];

  // store only if no exact match
  if (!best || best.distance !== 0) {

    try {
      await this.vector.store({
        questionText: qEnglish,
        answerText: englishAnswer,
        embedding,
      });
      console.log("💾 Stored new text query in DB");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : String(e);
      console.warn("[OpenAIService.ask] semantic_cache store skipped:", msg);
    }

  } else {
    console.log("⚡ Exact match found — skipping DB store");
  }
}
  
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