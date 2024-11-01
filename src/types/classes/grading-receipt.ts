export class GradingReceipt {
    public TransactionId: string = ""; // Initialize to an empty string
    public Timestamp: Date; // Use Date for better type safety
    public IrisOrderId: number = 0; // Initialize to 0
    public OrderLocalId: string = ""; // Initialize to an empty string
    public PatientLocalId: string = ""; // Initialize to an empty string
    public Success: boolean = false; // Initialize to false
    public ErrorMessage: string = ""; // Initialize to an empty string
    public ResultObjectType: string = ""; // Initialize to an empty string
    public Version: string = ""; // Initialize to an empty string

    constructor(
        transactionId?: string,
        timestamp?: Date,
        irisOrderId?: number,
        orderLocalId?: string,
        patientLocalId?: string,
        success?: boolean,
        errorMessage?: string,
        resultObjectType?: string,
        version?: string
    ) {
        this.TransactionId = transactionId || this.TransactionId; // Use provided value or default
        this.Timestamp = timestamp || new Date(); // Default to the current date and time
        this.IrisOrderId = irisOrderId || this.IrisOrderId; // Use provided value or default
        this.OrderLocalId = orderLocalId || this.OrderLocalId; // Use provided value or default
        this.PatientLocalId = patientLocalId || this.PatientLocalId; // Use provided value or default
        this.Success = success ?? this.Success; // Use provided value or default
        this.ErrorMessage = errorMessage || this.ErrorMessage; // Use provided value or default
        this.ResultObjectType = resultObjectType || this.ResultObjectType; // Use provided value or default
        this.Version = version || this.Version; // Use provided value or default
    }
}
