import { Body, Controller, Post } from "@nestjs/common";
import { WindmillService } from "./windmill.service";

@Controller("api/windmill")
export class WindmillController {
  constructor(private readonly windmillService: WindmillService) {}

  @Post("chat")
  async chat(@Body() body: { query: string; project_id: string }) {
    console.log("chat", body);
    return this.windmillService.forwardChatRequest(body.query, body.project_id);
  }

  @Post("people-like-you")
  async getPeopleLikeYou(@Body() body: any) {
    return this.windmillService.getPeopleLikeYou(body);
  }
}
