export declare class GradingReceipt {
    TransactionId: string;
    Timestamp: Date;
    IrisOrderId: number;
    OrderLocalId: string;
    PatientLocalId: string;
    Success: boolean;
    ErrorMessage: string;
    ResultObjectType: string;
    Version: string;
    constructor(transactionId?: string, timestamp?: Date, irisOrderId?: number, orderLocalId?: string, patientLocalId?: string, success?: boolean, errorMessage?: string, resultObjectType?: string, version?: string);
}
