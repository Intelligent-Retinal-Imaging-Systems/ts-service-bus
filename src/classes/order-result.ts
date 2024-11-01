/**
 * Entry point to Results object
 */
export class OrderResult
{
    public CameraOperator: ResultCameraOperator;
    public Gradings: ResultGrading;
    public HealthPlan: ResultHealthPlan;
    public ImageDetails: ResultImageDetails;
    public Images: ResultImage[];
    public Order: ResultOrder;
    public OrderingProvider: ResultProvider;
    public ReferringProvider: ResultProvider;
    public Patient: ResultPatient;
    public ResultCode: string;
    public ResultsDocument: ResultsDocument;
    public Site: ResultSite;
    public TransactionId: string;
    public Timestamp: any;
    public Success: boolean;
    public ErrorMessage: string;
    public ResultObjectType: string;
    public Version: string;
}