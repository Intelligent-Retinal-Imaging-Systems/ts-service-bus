"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../");
class GradingRequest {
    constructor(od, os, localId, clientGuid, site, version) {
        this.LocalId = "";
        this.ClientGuid = "";
        this.Site = new __1.RequestSite();
        this.Version = "";
        if (od)
            this.OD = od;
        if (os)
            this.OS = os;
        if (localId)
            this.LocalId = localId;
        if (clientGuid)
            this.ClientGuid = clientGuid;
        if (site)
            this.Site = site;
        if (version)
            this.Version = version;
    }
}
