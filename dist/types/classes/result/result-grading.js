"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultGrading = void 0;
class ResultGrading {
    constructor(carePlanDescription, carePlanName, gradedTime, od, os, pathology, provider, urgent, dxCodes = [], diagnosisCodes = [], notes = []) {
        this.DxCodes = []; // Initialize as an empty array
        this.DiagnosisCodes = []; // Initialize as an empty array
        this.Notes = []; // Initialize as an empty array
        this.CarePlanDescription = carePlanDescription;
        this.CarePlanName = carePlanName;
        this.GradedTime = gradedTime;
        this.OD = od;
        this.OS = os;
        this.Pathology = pathology;
        this.Provider = provider;
        this.Urgent = urgent;
        this.DxCodes = dxCodes;
        this.DiagnosisCodes = diagnosisCodes;
        this.Notes = notes;
    }
}
exports.ResultGrading = ResultGrading;
