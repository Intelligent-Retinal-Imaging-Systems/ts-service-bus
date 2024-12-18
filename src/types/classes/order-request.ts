import { OrderControlCode, RequestSite, RequestPatient, RequestCamera, RequestOrder, RequestProvider, RequestHealthPlan } from "../";  // Adjust import path as necessary

/**
 * Root class for a new order submission
 */
export class OrderRequest {
    /**
     * If provided, identifies the user submitting the order.
     * This must match an active User registered in the IRIS system.
     */
    public UserNameSubmitting?: string;

    /**
     * Specifies the submission type (e.g., New order, update, cancel)
     * Loosely follows HL7 standards with IRIS extensions
     */
    public OrderControlCode: OrderControlCode;

    /**
     * If provided, this identifies the camera submitting images for the order.
     * This must match a camera assigned to the submitting organization
     */
    public Camera: RequestCamera;

    /**
     * Order specific details
     */
    public Order: RequestOrder;

    /**
     * Patient details - Must provide at minimum: LocalId, First, Last, DOB, and Gender
     */
    public Patient: RequestPatient;

    /**
     * Optionally specify the provider submitting the order for the exam
     */
    public OrderingProvider?: RequestProvider;

    /**
     * Optionally specify the provider referring the patient to the submitting organization
     */
    public ReferringProvider?: RequestProvider;

    /**
     * Optionally specify the provider who will perform the exam
     */
    public CameraOperator?: RequestProvider;

    /**
     * Optionally specify the username of the IRIS registered user who will be capturing images
     */
    public CameraOperatorUserName?: string;

    /**
     * Optional Healthplan details
     */
    public HealthPlan?: RequestHealthPlan;

    /**
     * REQUIRED - Submitting organization's unique identifier supplied by IRIS
     */
    public ClientGuid: string;

    /**
     * Site information associated with the order
     */
    public Site: RequestSite;

    /**
     * Version of the order request
     */
    public Version: string;

    constructor(clientGuid: string) {
        this.ClientGuid = clientGuid;
        this.Site = new RequestSite();
        this.Patient = new RequestPatient();
        this.Camera = new RequestCamera();
        this.Order = new RequestOrder();
        this.OrderingProvider = new RequestProvider();
        this.ReferringProvider = new RequestProvider();
        this.CameraOperator = new RequestProvider();
        this.HealthPlan = new RequestHealthPlan();
        this.Version = "V2.3.1";
        this.OrderControlCode = OrderControlCode.NW;
    }
}
