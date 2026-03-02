import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class WhatsAppService {
  private token = process.env.WHATSAPP_TOKEN;
  private phoneId = process.env.WHATSAPP_PHONE_ID;
  private fromNumber = process.env.WHATSAPP_TEST_NUMBER;

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
    const url = `https://graph.facebook.com/v18.0/${this.phoneId}/media`;

    const res = await axios.post(
      url,
      {
        file: fs.createReadStream(filePath),
        type: "audio/mpeg",
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.id;
  }

  async sendAudio(to: string, mediaId: string) {
    await axios.post(
      `https://graph.facebook.com/v18.0/${this.phoneId}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "audio",
        audio: { id: mediaId },
      },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }

  async sendText(to: string, text: string) {
    await axios.post(
      `https://graph.facebook.com/v18.0/${this.phoneId}/messages`,
      {
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      },
      { headers: { Authorization: `Bearer ${this.token}` } }
    );
  }
}