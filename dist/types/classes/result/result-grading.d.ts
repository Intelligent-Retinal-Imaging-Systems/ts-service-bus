import { DiagnosisCode, Note, ResultEyeSideGrading, ResultProvider } from "../../";
export declare class ResultGrading {
    CarePlanDescription: string;
    CarePlanName: string;
    DxCodes: string[];
    DiagnosisCodes: DiagnosisCode[];
    GradedTime: Date;
    Notes: Note[];
    OD: ResultEyeSideGrading;
    OS: ResultEyeSideGrading;
    Pathology: boolean;
    Provider: ResultProvider;
    Urgent: boolean;
    constructor(carePlanDescription: string, carePlanName: string, gradedTime: Date, od: ResultEyeSideGrading, os: ResultEyeSideGrading, pathology: boolean, provider: ResultProvider, urgent: boolean, dxCodes?: string[], diagnosisCodes?: DiagnosisCode[], notes?: Note[]);
}
