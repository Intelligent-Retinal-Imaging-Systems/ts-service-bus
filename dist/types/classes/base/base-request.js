"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRequest = void 0;
const __1 = require("../../");
class BaseRequest {
    constructor() {
        this.ClientGuid = "";
        this.Version = "";
        this.Site = new __1.RequestSite();
    }
}
exports.BaseRequest = BaseRequest;
