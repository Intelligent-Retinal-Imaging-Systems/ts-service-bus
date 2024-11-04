export declare class OrderReceipt {
    TransactionId: string;
    Timestamp: Date;
    IrisOrderId: number;
    OrderLocalId: string;
    PatientLocalId: string;
    Success: boolean;
    ErrorMessage: string;
    ResultObjectType: string;
    Version: string;
    constructor(transactionId: string, timestamp: Date | undefined, // Default to the current date and time
    irisOrderId: number, orderLocalId: string, patientLocalId: string, success: boolean, errorMessage?: string, // Default to an empty string
    resultObjectType?: string, // Default to an empty string
    version?: string);
}
