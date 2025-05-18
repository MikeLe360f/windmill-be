import { ConfigService } from "@nestjs/config";
import { ChatService } from "./chat.service";
export declare class WindmillService {
    private configService;
    private chatService;
    constructor(configService: ConfigService, chatService: ChatService);
    private get windmillApiUrl();
    private get apiKey();
    forwardRequest(query: string, projectId: string): Promise<any>;
    forwardChatRequest(query: string, projectId: string): Promise<any>;
}
