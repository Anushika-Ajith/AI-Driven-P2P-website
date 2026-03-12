import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";

@Injectable()
export class WhatsAppService {
  private token = process.env.WHATSAPP_TOKEN;
  private phoneId = process.env.WHATSAPP_PHONE_ID;
  private fromNumber = process.env.WHATSAPP_TEST_NUMBER;

  constructor() {
    // Validate required environment variables
    if (!this.token) {
      console.error("⚠️  WHATSAPP_TOKEN is not set in environment variables!");
    }
    if (!this.phoneId) {
      console.error("⚠️  WHATSAPP_PHONE_ID is not set in environment variables!");
    }
  }

  async downloadMedia(mediaId: string): Promise<string> {
    const mediaInfo = await axios.get(
      `https://graph.facebook.com/v18.0/${mediaId}`,
      { headers: { Authorization: `Bearer ${this.token}` } }
    );

    const url = mediaInfo.data.url;

    const file = await axios.get(url, {
      responseType: "arraybuffer",
      headers: { Authorization: `Bearer ${this.token}` },
    });

    const filePath = path.join(process.cwd(), "audio", `${mediaId}.ogg`);
    fs.writeFileSync(filePath, file.data);

    return filePath;
  }

  async uploadMedia(filePath: string): Promise<string> {
    if (!this.token) {
      throw new Error("WHATSAPP_TOKEN is not configured");
    }
    if (!this.phoneId) {
      throw new Error("WHATSAPP_PHONE_ID is not configured");
    }

    const url = `https://graph.facebook.com/v22.0/${this.phoneId}/media`;

    // Create FormData properly
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath), {
      filename: path.basename(filePath),
      contentType: "audio/mpeg",
    });
    form.append("type", "audio/mpeg");
    form.append("messaging_product", "whatsapp");

    try {
      const res = await axios.post(url, form, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          ...form.getHeaders(),
        },
      });

      console.log("✅ Media uploaded successfully, Media ID:", res.data.id);
      return res.data.id;
    } catch (error: any) {
      console.error("❌ Error uploading media:");
      console.error("Status:", error.response?.status);
      console.error("Error Data:", JSON.stringify(error.response?.data, null, 2));
      console.error("File path:", filePath);
      throw error;
    }
  }

  async sendAudio(to: string, mediaId: string) {
    if (!this.token) {
      throw new Error("WHATSAPP_TOKEN is not configured");
    }
    if (!this.phoneId) {
      throw new Error("WHATSAPP_PHONE_ID is not configured");
    }

    try {
      const response = await axios.post(
        `https://graph.facebook.com/v22.0/${this.phoneId}/messages`,
        {
          messaging_product: "whatsapp",
          to: to,
          type: "audio",
          audio: {
            id: mediaId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("🎤 Voice message sent successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error sending WhatsApp audio:");
      console.error("Status:", error.response?.status);
      console.error("Status Text:", error.response?.statusText);
      console.error("Error Data:", JSON.stringify(error.response?.data, null, 2));
      throw error;
    }
  }

  async sendText(to: string, text: string) {
    if (!this.token) {
      throw new Error("WHATSAPP_TOKEN is not configured");
    }
    if (!this.phoneId) {
      throw new Error("WHATSAPP_PHONE_ID is not configured");
    }

    try {
      // const response = await axios.post(
      //   `https://graph.facebook.com/v18.0/${this.phoneId}/messages`,
      //   {
      //     messaging_product: "whatsapp",
      //     to,
      //     type: "text",
      //     text: { body: text },
      //   },
      //   { headers: { Authorization: `Bearer ${this.token}` } }
      // );
      console.log("Sending text message to:", to);
      console.log("Text message:", text);
      console.log("Phone ID:", this.phoneId);
      console.log("Token (first 10 chars):", this.token?.substring(0, 10) + "...");
      const response = await axios.post(
        `https://graph.facebook.com/v25.0/${this.phoneId}/messages`,
        {
          messaging_product: "whatsapp",
          to: to,
          type: "text",
          text: { body: text },
        },
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("✅ Message sent successfully:", response.data);
      return response.data;
    } catch (error: any) {
      console.error("❌ Error sending WhatsApp message:");
      console.error("Status:", error.response?.status);
      console.error("Status Text:", error.response?.statusText);
      console.error("Error Data:", JSON.stringify(error.response?.data, null, 2));
      console.error("Phone ID:", this.phoneId);
      console.error("Token (first 10 chars):", this.token?.substring(0, 10) + "...");
      throw error;
    }
  }
}