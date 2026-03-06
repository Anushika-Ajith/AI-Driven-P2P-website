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
    console.log("🎵 Voice route called with file:", file);
    return this.askService.handleVoice(file);
  }

  // 📝 Text route
  @Post()
  async ask(@Body("question") q: string) {
    return this.askService.ask(q);
  }
}