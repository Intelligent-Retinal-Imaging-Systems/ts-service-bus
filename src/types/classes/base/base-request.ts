import {RequestSite} from "../../";

export class BaseRequest {
    public ClientGuid: string = "";
    public Site: RequestSite;
    public Version: string = "";

    constructor() {
        this.Site = new RequestSite();
    }
}