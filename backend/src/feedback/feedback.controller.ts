import { Controller, Post, Body } from "@nestjs/common";
import { FeedbackService } from "./feedback.service";

@Controller("feedback")
export class FeedbackController {
  constructor(
    private readonly feedbackService: FeedbackService
  ) {}

  @Post()
  saveFeedback(
    @Body() body: {
      feedbackId: string;
      isHelpful: boolean;
      comments?: string;
    }
  ) {
    return this.feedbackService.save(
      body.feedbackId,
      body.isHelpful,
      body.comments
    );
  }
}