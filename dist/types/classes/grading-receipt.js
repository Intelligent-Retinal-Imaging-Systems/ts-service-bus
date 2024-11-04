"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GradingReceipt = void 0;
class GradingReceipt {
    constructor(transactionId, timestamp, irisOrderId, orderLocalId, patientLocalId, success, errorMessage, resultObjectType, version) {
        this.TransactionId = ""; // Initialize to an empty string
        this.IrisOrderId = 0; // Initialize to 0
        this.OrderLocalId = ""; // Initialize to an empty string
        this.PatientLocalId = ""; // Initialize to an empty string
        this.Success = false; // Initialize to false
        this.ErrorMessage = ""; // Initialize to an empty string
        this.ResultObjectType = ""; // Initialize to an empty string
        this.Version = ""; // Initialize to an empty string
        this.TransactionId = transactionId || this.TransactionId; // Use provided value or default
        this.Timestamp = timestamp || new Date(); // Default to the current date and time
        this.IrisOrderId = irisOrderId || this.IrisOrderId; // Use provided value or default
        this.OrderLocalId = orderLocalId || this.OrderLocalId; // Use provided value or default
        this.PatientLocalId = patientLocalId || this.PatientLocalId; // Use provided value or default
        this.Success = success !== null && success !== void 0 ? success : this.Success; // Use provided value or default
        this.ErrorMessage = errorMessage || this.ErrorMessage; // Use provided value or default
        this.ResultObjectType = resultObjectType || this.ResultObjectType; // Use provided value or default
        this.Version = version || this.Version; // Use provided value or default
    }
}
exports.GradingReceipt = GradingReceipt;
