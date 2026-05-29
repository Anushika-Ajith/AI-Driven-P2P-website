import { Injectable } from "@nestjs/common";

@Injectable()
export class FeedbackService {

  async save(
    feedbackId: string,
    isHelpful: boolean,
    comments?: string
  ) {

    console.log("========== FEEDBACK ==========");
    console.log("feedbackId:", feedbackId);
    console.log("isHelpful:", isHelpful);
    console.log("comments:", comments);
    console.log("==============================");

    return {
      success: true,
      message: "Feedback received"
    };
  }
}