export class OrderReceipt {
    public TransactionId: string;
    public Timestamp: Date; // Change to Date for better type safety
    public IrisOrderId: number;
    public OrderLocalId: string;
    public PatientLocalId: string;
    public Success: boolean;
    public ErrorMessage: string;
    public ResultObjectType: string;
    public Version: string;

    constructor(
        transactionId: string,
        timestamp: Date = new Date(), // Default to the current date and time
        irisOrderId: number,
        orderLocalId: string,
        patientLocalId: string,
        success: boolean,
        errorMessage: string = "", // Default to an empty string
        resultObjectType: string = "", // Default to an empty string
        version: string = "" // Default to an empty string
    ) {
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.IrisOrderId = irisOrderId;
        this.OrderLocalId = orderLocalId;
        this.PatientLocalId = patientLocalId;
        this.Success = success;
        this.ErrorMessage = errorMessage;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
    }
}
