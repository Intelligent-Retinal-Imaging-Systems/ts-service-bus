"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseResult = void 0;
class BaseResult {
    constructor(transactionId, timestamp, success, errorMessage = null, resultObjectType, version) {
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.Success = success;
        this.ErrorMessage = errorMessage;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
    }
}
exports.BaseResult = BaseResult;
