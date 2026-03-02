import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as fs from "fs";
import FormData from "form-data";
// No import needed — Node 18+ has global fetch
import { parseFile } from "music-metadata";

@Injectable()
export class SarvamService {
  private readonly endpoint = "https://api.sarvam.ai/translate";
  private readonly subKey = process.env.SARVAM_API_SUBSCRIPTION_KEY;
  private getSpeaker(lang: string, gender: "male" | "female") {
  const speakers = {
    male: [
      "aditya","ashutosh","rahul","rohan","amit","dev","ratan","varun",
      "manan","sumit","kabir","aayan","shubh","advait","anand","tarun",
      "sunny","mani","gokul","vijay","mohit","rehan","soham"
    ],
    female: [
      "ritu","priya","neha","pooja","simran","kavya","ishita","shreya",
      "roopa","amelia","sophia","tanya","suhani","kavitha","rupali"
    ]
  };

  // pick first matching speaker for the gender
  return gender === "male"
    ? speakers.male[0]  // ← default "aditya"
    : speakers.female[0]; // ← default "ritu"
}

  async translate(text: string, target: string, source: string): Promise<string> {
    try {
      const res = await axios.post(
        this.endpoint,
        {
          input: text,
          source_language_code: source,
          target_language_code: target,
          speaker_gender: "Male",
          mode: "formal",
          model: "mayura:v1",
          enable_preprocessing: false,
          numerals_format: "native"
        },
        {
          headers: {
            "api-subscription-key": this.subKey,
            "content-type": "application/json"
          }
        }
      );
      console.log("SARVAM RESPONSE:", res.data);
      return res.data;
    } catch (err) {
      console.log("Sarvam ERROR:", err.response?.data || err);
      return text; // fallback
    }
  }

  async stt(filePath: string) {
  const form = new FormData();
  form.append("file", fs.createReadStream(filePath));
  form.append("language", "en-IN");
  form.append("sample_rate", "16000");

  const res = await axios.post(
    "https://api.sarvam.ai/speech-to-text",
    form,
    {
      headers: {
        ...form.getHeaders(),
        "api-subscription-key": process.env.SARVAM_API_SUBSCRIPTION_KEY,   // ✅ FIX
      },
    }
  );

  return res.data.transcript;
}

async tts(
  text: string,
  lang: string = "hi-IN",
  gender: "male" | "female" = "female"
): Promise<string> {
  try {
    // 1) Get correct voice dynamically
    const speaker = this.getSpeaker(lang, gender);
    console.log("TTS Speaker Selected:", speaker);

    // 2) Prepare payload
    const payload = {
      text,
      target_language_code: lang,
      speaker,
      model: "bulbul:v3",
      pace: 1.0,
      speech_sample_rate: 22050,
      output_audio_codec: "mp3",
      enable_preprocessing: true,
    };

    // 3) API Request
    const response = await fetch("https://api.sarvam.ai/text-to-speech/stream", {
      method: "POST",
      headers: {
        "api-subscription-key": process.env.SARVAM_API_SUBSCRIPTION_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.log("TTS ERROR:", await response.text());
      throw new Error("Sarvam TTS failed");
    }

    // 4) Read Streaming Audio
    const reader = response.body!.getReader();
    const chunks: Uint8Array[] = [];

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }

    // 5) Save File
    const fileName = `tts_${Date.now()}.mp3`;
    const filePath = `audio/${fileName}`;
    fs.writeFileSync(filePath, Buffer.concat(chunks));

    // 6) Get duration
    const metadata = await parseFile(filePath);
    const duration = metadata.format.duration;
    console.log(`VOICE LENGTH for ${lang} ${gender}:`, duration);

    return filePath;

  } catch (error) {
    console.error("SARVAM TTS ERROR:", error);
    throw new Error("TTS failed");
  }
}
}



