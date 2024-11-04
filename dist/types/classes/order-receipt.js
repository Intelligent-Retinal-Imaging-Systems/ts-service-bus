"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderReceipt = void 0;
class OrderReceipt {
    constructor(transactionId, timestamp = new Date(), // Default to the current date and time
    irisOrderId, orderLocalId, patientLocalId, success, errorMessage = "", // Default to an empty string
    resultObjectType = "", // Default to an empty string
    version = "" // Default to an empty string
    ) {
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.IrisOrderId = irisOrderId;
        this.OrderLocalId = orderLocalId;
        this.PatientLocalId = patientLocalId;
        this.Success = success;
        this.ErrorMessage = errorMessage;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
    }
}
exports.OrderReceipt = OrderReceipt;
