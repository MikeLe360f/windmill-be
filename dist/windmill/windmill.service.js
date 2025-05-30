"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WindmillService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const chat_service_1 = require("./chat.service");
let WindmillService = class WindmillService {
    constructor(configService, chatService) {
        this.configService = configService;
        this.chatService = chatService;
    }
    get windmillApiUrl() {
        return this.configService.get("WINDMILL_API_URL");
    }
    get apiKey() {
        return this.configService.get("WINDMILL_API_KEY");
    }
    async forwardRequest(query, projectId) {
        try {
            const response = await axios_1.default.post(this.windmillApiUrl, {
                query,
                project_id: projectId,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                },
            });
            return response.data;
        }
        catch (error) {
            throw new Error(`Failed to forward request to Windmill: ${error.message}`);
        }
    }
    async forwardChatRequest(query, projectId) {
        return this.chatService.chat(query, projectId);
    }
};
exports.WindmillService = WindmillService;
exports.WindmillService = WindmillService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        chat_service_1.ChatService])
], WindmillService);
//# sourceMappingURL=windmill.service.js.map