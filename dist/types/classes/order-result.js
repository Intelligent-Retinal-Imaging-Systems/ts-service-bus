"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResult = void 0;
/**
 * Entry point to Results object
 */
class OrderResult {
    constructor(cameraOperator, gradings, healthPlan, imageDetails, order, orderingProvider, referringProvider, patient, resultCode, resultsDocument, site, transactionId, timestamp, success, resultObjectType, version, errorMessage) {
        this.Images = []; // Initialize as empty array
        this.CameraOperator = cameraOperator;
        this.Gradings = gradings;
        this.HealthPlan = healthPlan;
        this.ImageDetails = imageDetails;
        this.Order = order;
        this.OrderingProvider = orderingProvider;
        this.ReferringProvider = referringProvider;
        this.Patient = patient;
        this.ResultCode = resultCode;
        this.ResultsDocument = resultsDocument;
        this.Site = site;
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.Success = success;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
        this.ErrorMessage = errorMessage;
    }
}
exports.OrderResult = OrderResult;
