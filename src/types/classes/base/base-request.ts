import {RequestSite} from "../Iris.Public";

class BaseRequest
{
    constructor() {
        this.Site = new RequestSite();
    }

    public ClientGuid: string;
    public Site: RequestSite;
    public Version: string;
}