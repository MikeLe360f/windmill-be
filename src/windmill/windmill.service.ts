import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";
import { ChatService } from "./chat.service";

@Injectable()
export class WindmillService {
  constructor(
    private configService: ConfigService,
    private chatService: ChatService
  ) {}

  private get windmillApiUrl() {
    return this.configService.get<string>("WINDMILL_API_URL");
  }

  private get apiKey() {
    return this.configService.get<string>("WINDMILL_API_KEY");
  }

  async forwardRequest(query: string, projectId: string) {
    try {
      const response = await axios.post(
        this.windmillApiUrl,
        {
          query,
          project_id: projectId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(
        `Failed to forward request to Windmill: ${error.message}`
      );
    }
  }

  async forwardChatRequest(query: string, projectId: string) {
    return this.chatService.chat(query, projectId);
  }

  async getPeopleLikeYou(data: any) {
    try {
      const response = await axios.post(
        `${this.windmillApiUrl}/api/r/epos/people-like-you`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": this.apiKey,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Failed to get people like you data: ${error.message}`);
    }
  }
}
