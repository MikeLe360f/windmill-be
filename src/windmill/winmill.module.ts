import { Module } from "@nestjs/common";
import { WindmillController } from "./windmill.controller";
import { WindmillService } from "./windmill.service";
import { ChatService } from "./chat.service";

@Module({
  controllers: [WindmillController],
  providers: [WindmillService, ChatService],
})
export class WindmillModule {}
