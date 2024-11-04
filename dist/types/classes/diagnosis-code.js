"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisCode = void 0;
class DiagnosisCode {
    constructor(code, description) {
        this.Code = ""; // Initialize to an empty string
        this.Description = ""; // Initialize to an empty string
        this.Code = code || this.Code; // Use provided value or default
        this.Description = description || this.Description; // Use provided value or default
    }
}
exports.DiagnosisCode = DiagnosisCode;
