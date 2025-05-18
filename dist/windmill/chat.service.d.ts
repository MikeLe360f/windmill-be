import { ConfigService } from "@nestjs/config";
export declare class ChatService {
    private configService;
    constructor(configService: ConfigService);
    chat(query: string, projectId: string): Promise<any>;
}
