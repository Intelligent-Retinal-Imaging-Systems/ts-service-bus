"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseOrder {
    constructor(createdTime, scheduledTime, localId, state, singleEyeOnly, missingEyeReason, additionalInfo, encounterNumber, evaluationTypes, studyInstanceUniqueId, departmentId, orderableIdentifier) {
        this.LocalId = ""; // Initialize to an empty string
        this.State = ""; // Initialize to an empty string
        this.SingleEyeOnly = false; // Initialize to false
        this.MissingEyeReason = ""; // Initialize to an empty string
        this.AdditionalInfo = ""; // Initialize to an empty string
        this.EncounterNumber = ""; // Initialize to an empty string
        this.EvaluationTypes = []; // Initialize to an empty array
        this.StudyInstanceUniqueId = ""; // Initialize to an empty string
        this.DepartmentId = ""; // Initialize to an empty string
        this.OrderableIdentifier = ""; // Initialize to an empty string
        this.CreatedTime = createdTime || new Date(); // Default to the current date and time
        this.ScheduledTime = scheduledTime || new Date(); // Default to the current date and time
        this.LocalId = localId || this.LocalId; // Use provided value or default
        this.State = state || this.State; // Use provided value or default
        this.SingleEyeOnly = singleEyeOnly !== null && singleEyeOnly !== void 0 ? singleEyeOnly : this.SingleEyeOnly; // Use provided value or default
        this.MissingEyeReason = missingEyeReason || this.MissingEyeReason; // Use provided value or default
        this.AdditionalInfo = additionalInfo || this.AdditionalInfo; // Use provided value or default
        this.EncounterNumber = encounterNumber || this.EncounterNumber; // Use provided value or default
        this.EvaluationTypes = evaluationTypes || this.EvaluationTypes; // Use provided value or default
        this.StudyInstanceUniqueId = studyInstanceUniqueId || this.StudyInstanceUniqueId; // Use provided value or default
        this.DepartmentId = departmentId || this.DepartmentId; // Use provided value or default
        this.OrderableIdentifier = orderableIdentifier || this.OrderableIdentifier; // Use provided value or default
    }
}
