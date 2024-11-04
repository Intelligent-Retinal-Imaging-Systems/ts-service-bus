"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRequest = void 0;
const __1 = require("../"); // Adjust import path as necessary
/**
 * Root class for a new order submission
 */
class OrderRequest {
    constructor(clientGuid) {
        this.ClientGuid = clientGuid;
        this.Site = new __1.RequestSite();
        this.Patient = new __1.RequestPatient();
        this.Camera = new __1.RequestCamera();
        this.Order = new __1.RequestOrder();
        this.OrderingProvider = new __1.RequestProvider();
        this.ReferringProvider = new __1.RequestProvider();
        this.CameraOperator = new __1.RequestProvider();
        this.HealthPlan = new __1.RequestHealthPlan();
        this.Version = "V2.3.1";
        this.OrderControlCode = __1.OrderControlCode.NW;
    }
}
exports.OrderRequest = OrderRequest;
