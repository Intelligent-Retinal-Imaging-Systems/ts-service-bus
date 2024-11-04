import { OrderControlCode, RequestSite, RequestPatient, RequestCamera, RequestOrder, RequestProvider, RequestHealthPlan } from "../";
/**
 * Root class for a new order submission
 */
export declare class OrderRequest {
    /**
     * If provided, identifies the user submitting the order.
     * This must match an active User registered in the IRIS system.
     */
    UserNameSubmitting?: string;
    /**
     * Specifies the submission type (e.g., New order, update, cancel)
     * Loosely follows HL7 standards with IRIS extensions
     */
    OrderControlCode: OrderControlCode;
    /**
     * If provided, this identifies the camera submitting images for the order.
     * This must match a camera assigned to the submitting organization
     */
    Camera: RequestCamera;
    /**
     * Order specific details
     */
    Order: RequestOrder;
    /**
     * Patient details - Must provide at minimum: LocalId, First, Last, DOB, and Gender
     */
    Patient: RequestPatient;
    /**
     * Optionally specify the provider submitting the order for the exam
     */
    OrderingProvider?: RequestProvider;
    /**
     * Optionally specify the provider referring the patient to the submitting organization
     */
    ReferringProvider?: RequestProvider;
    /**
     * Optionally specify the provider who will perform the exam
     */
    CameraOperator?: RequestProvider;
    /**
     * Optionally specify the username of the IRIS registered user who will be capturing images
     */
    CameraOperatorUserName?: string;
    /**
     * Optional Healthplan details
     */
    HealthPlan?: RequestHealthPlan;
    /**
     * REQUIRED - Submitting organization's unique identifier supplied by IRIS
     */
    ClientGuid: string;
    /**
     * Site information associated with the order
     */
    Site: RequestSite;
    /**
     * Version of the order request
     */
    Version: string;
    constructor(clientGuid: string);
}
