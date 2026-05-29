import { Controller, Post, Body } from "@nestjs/common";

@Controller("po")
export class PoController {

  @Post("approve")
  approvePo(@Body() body: any) {
    return {
      success: true,
      poNumber: body.po_no,
      status: "Approved"
    };
  }
}