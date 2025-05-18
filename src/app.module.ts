import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ChatService } from "./windmill/chat.service";
import { WindmillController } from "./windmill/windmill.controller";
import { WindmillService } from "./windmill/windmill.service";
import { WindmillModule } from "./windmill/winmill.module";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WindmillModule,
  ],
  controllers: [WindmillController],
  providers: [WindmillService, ChatService],
})
export class AppModule {}
