import {RequestSite, ResultEyeSideGrading} from "../../";

class GradingRequest {
    public OD: ResultEyeSideGrading | undefined; // Use undefined if it's optional
    public OS: ResultEyeSideGrading | undefined; // Use undefined if it's optional
    public LocalId: string = "";
    public ClientGuid: string = "";
    public Site: RequestSite = new RequestSite();
    public Version: string = "";

    constructor(
        od?: ResultEyeSideGrading,
        os?: ResultEyeSideGrading,
        localId?: string,
        clientGuid?: string,
        site?: RequestSite,
        version?: string
    ) {
        if (od) this.OD = od;
        if (os) this.OS = os;
        if (localId) this.LocalId = localId;
        if (clientGuid) this.ClientGuid = clientGuid;
        if (site) this.Site = site;
        if (version) this.Version = version;
    }
}
