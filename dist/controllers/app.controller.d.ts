import { MynefeshService } from "../services/app.service";
export declare class AppController {
    private readonly appService;
    constructor(appService: MynefeshService);
    getHello(): Promise<import("../schemas/mynefesh.schema").Mynefesh[]>;
}
