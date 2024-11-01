interface IRISServiceBusConnectionStrings {
    Orders: string;
    Events: string;
    Results: string;
}
/** Object for IRIS service bus operations configuration */
export interface Config {
    ClientGuid: string;
    ServiceBusConnectionStrings: IRISServiceBusConnectionStrings;
}
declare enum Laterality {
    OS = 0,
    OD = 1
}
declare enum MaritalStatus {
    A = 0,
    D = 1,
    I = 2,
    L = 3,
    M = 4,
    P = 5,
    S = 6,
    T = 7,
    W = 8
}
declare enum OrderControlCode {
    Unknown = 0,
    NW = 1,
    XO = 2,
    XR = 3,
    CA = 4,
    CR = 5,
    CloneOrder = 6,
    ChangeEvaluationType = 7,
    OC = 8,
    Submission = 9,
    SC = 10,
    ResendResult = 11
}
declare class Address {
    Street1: string;
    Street2: string;
    City: string;
    State: string;
    Zip: string;
    PostalCode: string;
    Region: string;
    Province: string;
    Territory: string;
    Country: string;
}
declare class Note {
    Date: any;
    Text: string;
}
declare class PersonName {
    First: string;
    Middle: string;
    Last: string;
}
declare class RequestAzureBlobStorage {
    Container: string;
    FileName: string;
}
declare class RequestCamera {
    Images: RequestImage[];
    Name: string;
    LocalId: string;
    Location: string;
    IPAddress: string;
    MACAddress: string;
    SerialNumber: string;
    Manufacturer: string;
    Model: string;
    SoftwareVersion: string;
    constructor();
}
declare class RequestHealthPlan {
    constructor();
    PrimaryCareProvider: RequestPCP;
    LocalId: string;
    Name: string;
    MemberId: string;
    HealthPlanPayerName: string;
    GroupName: string;
    GroupNumber: string;
    EffectiveDate: string;
    ExpirationDate: string;
    PolicyNumber: string;
}
declare class RequestImage {
    constructor();
    LocalId: string;
    Taken: any;
    GroupId: number;
    GroupOrdinal: number;
    AzureBlobStorage: RequestAzureBlobStorage;
    Laterality: Laterality;
    ImageContext: ImageContext;
    ParentLocalId: string;
}
/**
 * Structure containing order details
 */
declare class RequestOrder {
    constructor();
    /**
     * Optionally specify the procedure (CPT Code)
     */
    CPTCode: string;
    /**
     * If specified this identifies when orders should be available from the worklist
     */
    ScheduledTime: any;
    /**
     * Order identifier as specified by the submitting organization
     */
    LocalId: string;
    /**
     * US State where the exam is being performed.  Important for proper assignment of Graders
     */
    State: string;
    /**
     * If true, the exam will only include one eye as there is a known issue preventing the capture of the other eye
     */
    SingleEyeOnly: boolean;
    /**
     * If specified, the reason that only one eye is being captured.  Based on customer configuration this could render in the final report
     */
    MissingEyeReason: string;
    /**
     * Any additional order specified information typically json embedded
     */
    AdditionalInfo: string;
    /**
     * Optional encouter number as generally created from the customers EMR/EHR
     */
    EncounterNumber: string;
    /**
     * Collection of evaluation types required for the order (which exams to perform).
     * Default to DR.  Do not change without consulting IRIS support as evaluation types must
     * be subscribed to prior to submission.
     */
    EvaluationTypes: EvaluationType[];
    /**
     * Optionally supply identifier as typically originating from a DICOM source
     */
    StudyInstanceUniqueId: string;
    /**
     * Optional supply the department id (specified by the submitting organization) that the exam will be fulfilled from.
     */
    DepartmentId: string;
    /**
     * Optionally supply identifier as is typically gnenerated by submitting organizations EMR/EHR
     */
    OrderableIdentifier: string;
}
/**
 * Patient details structure
 */
export declare class RequestPatient {
    constructor();
    /**
     * Optional race
     */
    Race: string;
    /**
     * Optional ethnicity
     */
    Ethnicity: string;
    /**
     * Optional language
     */
    PrimaryLanguage: string;
    /**
     * Optional patient marital status
     */
    MaritalStatus: MaritalStatus;
    /**
     * Optional patient email address
     */
    Email: string;
    /**
     * Optional additional info specific to the patient. Typically encoded in JSON
     */
    AdditionalInfo: string;
    /**
     * Optionally supply the patient's home address
     */
    Address: Address;
    /**
     * ICD-10 Diagnosis supporting the procedure.  This code is typically the foundation code
     * used when generating Dx codes based on the results of the exam.
     */
    DxCode: string;
    /**
     * Identifier as specified by the submitting organization.
     * Typically MRN
     */
    LocalId: string;
    /**
     * Patient first and last name (required)
     */
    Name: PersonName;
    /**
     * Date of birth (required). Must be parsable as a full date
     */
    Dob: string;
    /**
     * Obsolete Gender specification.  Use addGender method
     */
    Gender: Gender;
    /**
     * Optional patient phone number
     */
    Phone: string;
    /**
     * Collection of gender declarations
     */
    Genders: PersonGender[];
    /**
     * Helper method for adding one or more genders
     * @param context
     * @param gender
     */
    addGender(context: GenderContext, gender: Gender): void;
}
declare class RequestPCP {
    constructor();
    Name: PersonName;
    NPI: string;
    EmailAddress: string;
    FaxNumber: string;
}
declare class RequestProvider {
    constructor();
    NPI: string;
    Name: PersonName;
    Associations: string;
    Degrees: string;
    Taxonomy: string;
    Email: string;
}
/**
 * Structure for IRIS site
 */
export declare class RequestSite {
    constructor();
    /**
     * Optionall supply the name of the site.
     * Typically only supplied when configured for automatic site addition
     */
    Name: string;
    /**
     * If provided for creating a new site, you must include the US State the site resides in
     */
    Address: Address;
    /**
     * Site identifier that is specified by the submitting organization.  This identifier must be configured by IRIS
     * if the site was not automatically added. Otherwise contact IRIS support to get the valid site identifiers registered to you
     */
    LocalId: string;
}
declare class ResultCameraOperator {
    Name: PersonName;
    Notes: Note[];
    UserName: string;
}
declare class ResultEyeSideGrading {
    Findings: ResultFinding[];
    Gradable: boolean;
    UngradableReasons: string[];
    MissingEyeReason: string;
}
declare class ResultFinding {
    Finding: string;
    Result: string;
}
declare class ResultGrading {
    CarePlanDescription: string;
    CarePlanName: string;
    DxCodes: string[];
    DiagnosisCodes: DiagnosisCode[];
    GradedTime: any;
    Notes: Note[];
    OD: ResultEyeSideGrading;
    OS: ResultEyeSideGrading;
    Pathology: boolean;
    Provider: ResultProvider;
    Urgent: boolean;
}
declare class ResultHealthPlan {
    LocalId: string;
    Name: string;
    MemberId: string;
    HealthPlanPayerName: string;
    GroupName: string;
    GroupNumber: string;
    EffectiveDate: string;
    ExpirationDate: string;
    PolicyNumber: string;
}
declare class ResultImage {
    OrderImageID: number;
    Camera: BaseCamera;
    FileName: string;
    Received: any;
    ContainerName: string;
    LocalId: string;
    Taken: any;
    GroupId: number;
    GroupOrdinal: number;
    Laterality: Laterality;
    ImageContext: ImageContext;
    ParentLocalId: string;
}
declare class ResultImageDetails {
    LeftEyeCount: number;
    LeftEyeEnhancedCount: number;
    LeftEyeOriginalCount: number;
    RightEyeCount: number;
    RightEyeEnhancedCount: number;
    RightEyeOriginalCount: number;
    SingleEyeOnly: boolean;
    TotalCount: number;
}
declare class ResultOrder {
    Expedite: boolean;
    PatientOrderID: number;
    ServicedTime: any;
    Status: string;
    CreatedTime: any;
    ScheduledTime: any;
    LocalId: string;
    State: string;
    SingleEyeOnly: boolean;
    MissingEyeReason: string;
    AdditionalInfo: string;
    EncounterNumber: string;
    EvaluationTypes: EvaluationType[];
    StudyInstanceUniqueId: string;
    DepartmentId: string;
    OrderableIdentifier: string;
}
declare class ResultPatient {
    PatientId: number;
    LocalId: string;
    Name: PersonName;
    Dob: string;
    Gender: Gender;
    Phone: string;
    Genders: PersonGender[];
}
declare class ResultProvider {
    NPI: string;
    Name: PersonName;
    Associations: string;
    Degrees: string;
    Taxonomy: string;
    Email: string;
}
declare class ResultsDocument {
    Content: string;
    Encoding: string;
    Type: string;
}
declare class ResultSite {
    LocalId: string;
}
/**
 * Root class for a new order submission
 */
export declare class OrderRequest {
    constructor(clientGuid: string);
    /**
     * If provided, identifies the user submitting the order.
     * This must match an active User registered in the IRIS system.
     */
    UserNameSubmitting: string;
    /**
     * Specifies the submission type (e.g.: New order, update, cancel)
     * Loosely follows HL7 standards with IRIS extensions
     */
    OrderControlCode: OrderControlCode;
    /**
     * If provide this identifies the camera submitting images for the order.
     * This must match a camera assigned to the submitting organization
     */
    Camera: RequestCamera;
    /**
     * Order specific details
     */
    Order: RequestOrder;
    /**
     * Patient details - Must provide at minimum: LocalId, First, Last, DOB and Gender
     */
    Patient: RequestPatient;
    /**
     * Optionally specify the provider submitting the order for the exam
     */
    OrderingProvider: RequestProvider;
    /**
     * Optionally specify the provider referring the patient to the submitting organization
     */
    ReferringProvider: RequestProvider;
    /**
     * Optionally specify the provider who will perform the exam
     */
    CameraOperator: RequestProvider;
    /**
     * Optionally specify the username of the IRIS registered user who will be capturing images
     */
    CameraOperatorUserName: string;
    /**
     * Optional Healthplan details
     */
    HealthPlan: RequestHealthPlan;
    /**
     * REQUIRED - Submitting organizations unique identifier supplied by IRIS
     */
    ClientGuid: string;
    Site: RequestSite;
    Version: string;
}
/**
 * Entry point to Results object
 */
export declare class OrderResult {
    CameraOperator: ResultCameraOperator;
    Gradings: ResultGrading;
    HealthPlan: ResultHealthPlan;
    ImageDetails: ResultImageDetails;
    Images: ResultImage[];
    Order: ResultOrder;
    OrderingProvider: ResultProvider;
    ReferringProvider: ResultProvider;
    Patient: ResultPatient;
    ResultCode: string;
    ResultsDocument: ResultsDocument;
    Site: ResultSite;
    TransactionId: string;
    Timestamp: any;
    Success: boolean;
    ErrorMessage: string;
    ResultObjectType: string;
    Version: string;
}
declare class DiagnosisCode {
    Code: string;
    Description: string;
}
export declare class PersonGender {
    Context: GenderContext;
    Value: Gender;
}
/**
 * Send order to IRIS
  * @param order Hydrated order request object to send to IRIS
  */
export declare function SendOrder(order: OrderRequest): Promise<void>;
/** Callback type for Results */
export type ResultsCallbackType = (res: OrderResult) => void;
/**
 * Wait for results to be published
 * @param timeoutseconds Number of seconds before wait quits. 0 = forever
 */
export declare function WaitResults(cb: ResultsCallbackType, timeoutseconds: number): Promise<void>;
/** Callback type for Events */
export type EventsCallbackType = (res: any) => void;
/**
 * Wait for new order events
 * @param cb Callback for new events
 * @param timeoutseconds Timeout in seconds before wait ends. 0 = forever
 * @returns
 */
export declare function WaitEvents(cb: EventsCallbackType, timeoutseconds: number): Promise<void>;
export {};
