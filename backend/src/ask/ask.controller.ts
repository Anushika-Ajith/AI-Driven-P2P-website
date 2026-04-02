// import { Controller, Post, Body } from "@nestjs/common";
// import { OpenAIService } from "../openai/openai.service";
// import { UploadedFile, UseInterceptors } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";
// import { AskService } from "./ask.service";

// @Controller("ask")
// export class AskController {
//   constructor(private readonly askService: AskService) {}
//   @Post("voice")
//   @UseInterceptors(FileInterceptor("audio"))
//   async voice(@UploadedFile() file: Express.Multer.File) {
//     return await this.askService.handleVoice(file);
//   }
//   @Post()
//   async ask(@Body("question") q: string) {
//     try {
//       const translatedAnswer = await this.openAI.ask(q);

//       return {
//         answer: translatedAnswer,  // 👈 FRONTEND GETS THIS
//       };
//     } catch (err) {
//       console.error("Backend Error:", err);
//       return {
//         answer: "ERROR"
//       };
//     }
//   }
// }



import { Controller, Post, Body, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AskService } from "./ask.service";

@Controller("ask")
export class AskController {
  constructor(private readonly askService: AskService) {}

  // 🎤 Voice route
  @Post("voice")
  @UseInterceptors(FileInterceptor("audio"))
  async voice(@UploadedFile() file: any) {
    return this.askService.handleVoice(file);
  }

  // 📝 Text route
  @Post()
  async ask(@Body("question") q: string) {
    console.log("[ASK][pipeline][1/nest:controller] POST /ask received");
    console.log("[ASK][pipeline][1/nest:controller] question:", q);
    const out = await this.askService.ask(q);
    console.log("[ASK][pipeline][9/nest:controller] Returning response to client (answer length:", String(out?.answer ?? "").length, ")");
    return out;
  }
}