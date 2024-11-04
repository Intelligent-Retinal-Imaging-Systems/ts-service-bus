"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultEyeSideGrading = void 0;
class ResultEyeSideGrading {
    constructor(gradable, missingEyeReason) {
        this.Findings = [];
        this.UngradableReasons = [];
        this.Gradable = gradable;
        this.MissingEyeReason = missingEyeReason || '';
    }
}
exports.ResultEyeSideGrading = ResultEyeSideGrading;
