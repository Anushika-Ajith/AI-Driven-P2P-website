import { Controller, Get } from "@nestjs/common";

@Controller("approvals")
export class ApprovalsController {

  @Get()
  getApprovals() {
    return {
      approvals: [
        {
          id: "APP001",
          type: "Purchase Order",
          status: "Pending"
        }
      ]
    };
  }
}