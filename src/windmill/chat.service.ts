import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios from "axios";

@Injectable()
export class ChatService {
  constructor(private configService: ConfigService) {}

  async chat(query: string, projectId: string) {
    const url = `${this.configService.get<string>("WINDMILL_API_URL")}/api/r/rag-epos/chat`;
    const apiKey = this.configService.get<string>("WINDMILL_API_KEY");
    console.log("chat", url, apiKey);
    const response = await axios.post(
      url,
      { query, project_id: projectId },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  }
}
