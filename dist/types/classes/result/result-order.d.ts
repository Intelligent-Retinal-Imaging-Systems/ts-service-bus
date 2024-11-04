import { EvaluationType } from "../../";
export declare class ResultOrder {
    Expedite: boolean;
    PatientOrderID: number;
    ServicedTime: Date;
    Status: string;
    CreatedTime: Date;
    ScheduledTime: Date;
    LocalId: string;
    State: string;
    SingleEyeOnly: boolean;
    MissingEyeReason?: string;
    AdditionalInfo?: string;
    EncounterNumber: string;
    EvaluationTypes: EvaluationType[];
    StudyInstanceUniqueId: string;
    DepartmentId: string;
    OrderableIdentifier: string;
    constructor(expedite: boolean, patientOrderID: number, servicedTime: Date, status: string, createdTime: Date, scheduledTime: Date, localId: string, state: string, singleEyeOnly: boolean, encounterNumber: string, studyInstanceUniqueId: string, departmentId: string, orderableIdentifier: string, missingEyeReason?: string, additionalInfo?: string, evaluationTypes?: EvaluationType[]);
}
