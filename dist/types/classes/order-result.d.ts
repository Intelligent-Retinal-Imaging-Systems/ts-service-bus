import { ResultCameraOperator, ResultPatient, ResultGrading, ResultHealthPlan, ResultImageDetails, ResultImage, ResultOrder, ResultProvider, ResultsDocument, ResultSite } from "../";
/**
 * Entry point to Results object
 */
export declare class OrderResult {
    CameraOperator: ResultCameraOperator;
    Gradings: ResultGrading;
    HealthPlan: ResultHealthPlan;
    ImageDetails: ResultImageDetails;
    Images: ResultImage[];
    Order: ResultOrder;
    OrderingProvider: ResultProvider;
    ReferringProvider: ResultProvider;
    Patient: ResultPatient;
    ResultCode: string;
    ResultsDocument: ResultsDocument;
    Site: ResultSite;
    TransactionId: string;
    Timestamp: Date;
    Success: boolean;
    ErrorMessage?: string;
    ResultObjectType: string;
    Version: string;
    constructor(cameraOperator: ResultCameraOperator, gradings: ResultGrading, healthPlan: ResultHealthPlan, imageDetails: ResultImageDetails, order: ResultOrder, orderingProvider: ResultProvider, referringProvider: ResultProvider, patient: ResultPatient, resultCode: string, resultsDocument: ResultsDocument, site: ResultSite, transactionId: string, timestamp: Date, success: boolean, resultObjectType: string, version: string, errorMessage?: string);
}
