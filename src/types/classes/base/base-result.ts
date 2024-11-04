export class BaseResult {
    public TransactionId: string;
    public Timestamp: Date;
    public Success: boolean;
    public ErrorMessage: string | null;
    public ResultObjectType: string;
    public Version: string;

    constructor(
        transactionId: string,
        timestamp: Date,
        success: boolean,
        errorMessage: string | null = null,
        resultObjectType: string,
        version: string
    ) {
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.Success = success;
        this.ErrorMessage = errorMessage;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
    }
}
