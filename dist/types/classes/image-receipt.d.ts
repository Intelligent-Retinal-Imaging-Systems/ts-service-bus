export declare class ImageReceipt {
    TransactionId: string;
    Timestamp: Date;
    ImageLocalId: string;
    IrisImageId: number;
    IrisOrderId: number;
    OrderLocalId: string;
    PatientLocalId: string;
    Success: boolean;
    ErrorMessage: string;
    ResultObjectType: string;
    Version: string;
    constructor(transactionId?: string, timestamp?: Date, imageLocalId?: string, irisImageId?: number, irisOrderId?: number, orderLocalId?: string, patientLocalId?: string, success?: boolean, errorMessage?: string, resultObjectType?: string, version?: string);
}
