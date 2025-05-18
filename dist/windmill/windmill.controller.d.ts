import { WindmillService } from "./windmill.service";
export declare class WindmillController {
    private readonly windmillService;
    constructor(windmillService: WindmillService);
    chat(body: {
        query: string;
        project_id: string;
    }): Promise<any>;
}
