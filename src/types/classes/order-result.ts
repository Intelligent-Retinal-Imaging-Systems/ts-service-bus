import { ResultCameraOperator, ResultPatient, ResultGrading, ResultHealthPlan, ResultImageDetails, ResultImage, ResultOrder, ResultProvider, ResultsDocument, ResultSite } from "../";
import { } from "../";  // Assuming these types exist

/**
 * Entry point to Results object
 */
export class OrderResult {
    public CameraOperator: ResultCameraOperator;
    public Gradings: ResultGrading;
    public HealthPlan: ResultHealthPlan;
    public ImageDetails: ResultImageDetails;
    public Images: ResultImage[] = [];  // Initialize as empty array
    public Order: ResultOrder;
    public OrderingProvider: ResultProvider;
    public ReferringProvider: ResultProvider;
    public Patient: ResultPatient;
    public ResultCode: string;
    public ResultsDocument: ResultsDocument;
    public Site: ResultSite;
    public TransactionId: string;
    public Timestamp: Date;  // Use Date instead of any
    public Success: boolean;
    public ErrorMessage?: string;  // Optional in case of no error
    public ResultObjectType: string;
    public Version: string;

    constructor(
        cameraOperator: ResultCameraOperator,
        gradings: ResultGrading,
        healthPlan: ResultHealthPlan,
        imageDetails: ResultImageDetails,
        order: ResultOrder,
        orderingProvider: ResultProvider,
        referringProvider: ResultProvider,
        patient: ResultPatient,
        resultCode: string,
        resultsDocument: ResultsDocument,
        site: ResultSite,
        transactionId: string,
        timestamp: Date,
        success: boolean,
        resultObjectType: string,
        version: string,
        errorMessage?: string
    ) {
        this.CameraOperator = cameraOperator;
        this.Gradings = gradings;
        this.HealthPlan = healthPlan;
        this.ImageDetails = imageDetails;
        this.Order = order;
        this.OrderingProvider = orderingProvider;
        this.ReferringProvider = referringProvider;
        this.Patient = patient;
        this.ResultCode = resultCode;
        this.ResultsDocument = resultsDocument;
        this.Site = site;
        this.TransactionId = transactionId;
        this.Timestamp = timestamp;
        this.Success = success;
        this.ResultObjectType = resultObjectType;
        this.Version = version;
        this.ErrorMessage = errorMessage;
    }
}
