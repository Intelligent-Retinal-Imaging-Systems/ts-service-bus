"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultOrder = void 0;
class ResultOrder {
    constructor(expedite, patientOrderID, servicedTime, status, createdTime, scheduledTime, localId, state, singleEyeOnly, encounterNumber, studyInstanceUniqueId, departmentId, orderableIdentifier, missingEyeReason, additionalInfo, evaluationTypes = []) {
        this.EvaluationTypes = []; // Initialize as empty array
        this.Expedite = expedite;
        this.PatientOrderID = patientOrderID;
        this.ServicedTime = servicedTime;
        this.Status = status;
        this.CreatedTime = createdTime;
        this.ScheduledTime = scheduledTime;
        this.LocalId = localId;
        this.State = state;
        this.SingleEyeOnly = singleEyeOnly;
        this.EncounterNumber = encounterNumber;
        this.StudyInstanceUniqueId = studyInstanceUniqueId;
        this.DepartmentId = departmentId;
        this.OrderableIdentifier = orderableIdentifier;
        this.MissingEyeReason = missingEyeReason;
        this.AdditionalInfo = additionalInfo;
        this.EvaluationTypes = evaluationTypes;
    }
}
exports.ResultOrder = ResultOrder;
