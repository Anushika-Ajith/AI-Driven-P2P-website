import { Controller, Post, Body } from "@nestjs/common";

@Controller("rfq")
export class RfqController {

  @Post("create")
  createRfq(@Body() body: any) {
    return {
      success: true,
      rfqNumber: "RFQ001",
      vendor: body.vendor_name
    };
  }
}