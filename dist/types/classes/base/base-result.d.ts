export declare class BaseResult {
    TransactionId: string;
    Timestamp: Date;
    Success: boolean;
    ErrorMessage: string | null;
    ResultObjectType: string;
    Version: string;
    constructor(transactionId: string, timestamp: Date, success: boolean, errorMessage: (string | null) | undefined, resultObjectType: string, version: string);
}
