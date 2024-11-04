"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultImageDetails = void 0;
class ResultImageDetails {
    constructor(leftEyeCount, leftEyeEnhancedCount, leftEyeOriginalCount, rightEyeCount, rightEyeEnhancedCount, rightEyeOriginalCount, singleEyeOnly) {
        this.LeftEyeCount = leftEyeCount;
        this.LeftEyeEnhancedCount = leftEyeEnhancedCount;
        this.LeftEyeOriginalCount = leftEyeOriginalCount;
        this.RightEyeCount = rightEyeCount;
        this.RightEyeEnhancedCount = rightEyeEnhancedCount;
        this.RightEyeOriginalCount = rightEyeOriginalCount;
        this.SingleEyeOnly = singleEyeOnly;
    }
}
exports.ResultImageDetails = ResultImageDetails;
