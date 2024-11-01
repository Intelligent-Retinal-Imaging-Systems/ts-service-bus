import {
    delay,
    isServiceBusError,
    ProcessErrorArgs,
    ServiceBusClient,
    ServiceBusReceivedMessage,
    ServiceBusSender,
  } from "@azure/service-bus";

/** Structure for storing all IRIS service bus connection string */
interface IRISServiceBusConnectionStrings {
	Orders: string,
	Events: string,
	Results: string	
}

/** Object for IRIS service bus operations configuration */
export interface Config {
	ClientGuid: string,
	ServiceBusConnectionStrings: IRISServiceBusConnectionStrings
}

//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

enum EvaluationType {
	Unknown = 0,
	DR = 1,
	Glaucoma = 2,
	HIV = 3,
	DR_REFNOREF = 6,
	AMD = 7,
	DR_AMD = 8
}
export enum Gender {
	U = 0,
	M = 1,
	F = 2,
	N = 3,
	O = 4,
	TM = 5,
	TF = 6,
	ND = 7,
	EQ = 8,
	NL = 9,
	X = 10
}
export enum GenderContext {
	Unknown = 0,
	IdentityGender = 1,
	BirthGender = 2
}
enum ImageClass {
	Fundus = 0,
	CT = 1,
	MRI = 2,
	Ultrasound = 3,
	XRay = 4,
	VRx = 5,
	OCT = 6,
	VisualFields = 7
}
enum ImageContext {
	Primary = 0,
	Secondary = 1,
	Unknown = 2,
	Component = 3,
	Aggregate = 4,
	Enhancement = 5,
	AddedLate = 6
}
enum ImageEncoding {
	JPG = 0,
	PNG = 1,
	BMP = 2,
	TIFF = 3,
	SVG = 4,
	PDF = 5,
	DCM = 6
}
enum Laterality {
	OS = 0,
	OD = 1
}
enum MaritalStatus {
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
enum OrderControlCode {
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
class BaseCamera
{
	public Name: string;
	public LocalId: string;
	public Location: string;
	public IPAddress: string;
	public MACAddress: string;
	public SerialNumber: string;
	public Manufacturer: string;
	public Model: string;
	public SoftwareVersion: string;
}
class BaseHealthPlan
{
	public LocalId: string;
	public Name: string;
	public MemberId: string;
	public HealthPlanPayerName: string;
	public GroupName: string;
	public GroupNumber: string;
	public EffectiveDate: string;
	public ExpirationDate: string;
	public PolicyNumber: string;
}
abstract class BaseImage
{
	public LocalId: string;
	public Taken: any;
	public GroupId: number;
	public GroupOrdinal: number;
	public Laterality: Laterality;
	public ImageContext: ImageContext;
	public ParentLocalId: string;
}
class BaseOrder
{
	public CreatedTime: any;
	public ScheduledTime: any;
	public LocalId: string;
	public State: string;
	public SingleEyeOnly: boolean;
	public MissingEyeReason: string;
	public AdditionalInfo: string;
	public EncounterNumber: string;
	public EvaluationTypes: EvaluationType[];
	public StudyInstanceUniqueId: string;
	public DepartmentId: string;
	public OrderableIdentifier: string;
}
class BasePatient
{
	constructor() {
		this.Name = new PersonName();
	}

	public LocalId: string;
	public Name: PersonName;
	public Dob: string;
	public Gender: Gender;
	public Phone: string;
	public Genders: PersonGender[];
}
abstract class BaseProvider
{
	constructor() {
		this.Name = new PersonName();
	}

	public NPI: string;
	public Name: PersonName;
	public Associations: string;
	public Degrees: string;
	public Taxonomy: string;
	public Email: string;
}
abstract class BaseSite
{
	public LocalId: string;
}
class Address
{
	public Street1: string;
	public Street2: string;
	public City: string;
	public State: string;
	public Zip: string;
	public PostalCode: string;
	public Region: string;
	public Province: string;
	public Territory: string;
	public Country: string;
}
class Note
{
	public Date: any;
	public Text: string;
}
class PersonName
{
	public First: string;
	public Middle: string;
	public Last: string;
}
class BasePublic
{
	public Version: string;
}
class BaseRequest
{
	constructor() {
		this.Site = new RequestSite();
	}

	public ClientGuid: string;
	public Site: RequestSite;
	public Version: string;
}
class BaseResult
{
	public TransactionId: string;
	public Timestamp: any;
	public Success: boolean;
	public ErrorMessage: string;
	public ResultObjectType: string;
	public Version: string;
}
class RequestAzureBlobStorage
{
	public Container: string;
	public FileName: string;
}
class RequestCamera
{
	constructor() {
		this.Images = new Array<RequestImage>();
	}

	public Images: RequestImage[];
	public Name: string;
	public LocalId: string;
	public Location: string;
	public IPAddress: string;
	public MACAddress: string;
	public SerialNumber: string;
	public Manufacturer: string;
	public Model: string;
	public SoftwareVersion: string;
}
class RequestHealthPlan
{
	constructor() {
		this.PrimaryCareProvider = new RequestPCP();

	}

	public PrimaryCareProvider: RequestPCP;
	public LocalId: string;
	public Name: string;
	public MemberId: string;
	public HealthPlanPayerName: string;
	public GroupName: string;
	public GroupNumber: string;
	public EffectiveDate: string;
	public ExpirationDate: string;
	public PolicyNumber: string;
}
class RequestImage
{
	constructor() {
		this.AzureBlobStorage = new RequestAzureBlobStorage();
	}

	public LocalId: string;
	public Taken: any;
	public GroupId: number;
	public GroupOrdinal: number;
	public AzureBlobStorage: RequestAzureBlobStorage;
	public Laterality: Laterality;
	public ImageContext: ImageContext;
	public ParentLocalId: string;
}
/**
 * Structure containing order details
 */
class RequestOrder
{
	constructor() {
		this.EvaluationTypes = new Array<EvaluationType>();
		this.EvaluationTypes[0] = EvaluationType.DR;
	}

	/**
	 * Optionally specify the procedure (CPT Code)
	 */
	public CPTCode: string;
	/**
	 * If specified this identifies when orders should be available from the worklist
	 */
	public ScheduledTime: any;
	/**
	 * Order identifier as specified by the submitting organization
	 */
	public LocalId: string;
	/**
	 * US State where the exam is being performed.  Important for proper assignment of Graders
	 */
	public State: string;
	/**
	 * If true, the exam will only include one eye as there is a known issue preventing the capture of the other eye
	 */
	public SingleEyeOnly: boolean;
	/**
	 * If specified, the reason that only one eye is being captured.  Based on customer configuration this could render in the final report
	 */
	public MissingEyeReason: string;
	/**
	 * Any additional order specified information typically json embedded
	 */
	public AdditionalInfo: string;
	/**
	 * Optional encouter number as generally created from the customers EMR/EHR
	 */
	public EncounterNumber: string;
	/**
	 * Collection of evaluation types required for the order (which exams to perform).  
	 * Default to DR.  Do not change without consulting IRIS support as evaluation types must 
	 * be subscribed to prior to submission.
	 */
	public EvaluationTypes: EvaluationType[];
	/**
	 * Optionally supply identifier as typically originating from a DICOM source
	 */
	public StudyInstanceUniqueId: string;
	/**
	 * Optional supply the department id (specified by the submitting organization) that the exam will be fulfilled from.
	 */
	public DepartmentId: string;
	/**
	 * Optionally supply identifier as is typically gnenerated by submitting organizations EMR/EHR
	 */
	public OrderableIdentifier: string;
}
/**
 * Patient details structure
 */
export class RequestPatient
{
	constructor() {
			this.Genders = new Array<PersonGender>();	
			this.Address = new Address();
			this.Name = new PersonName();
		}
	
	/**
	 * Optional race
	 */
	public Race: string;
	/**
	 * Optional ethnicity
	 */
	public Ethnicity: string;
	/**
	 * Optional language 
	 */
	public PrimaryLanguage: string;
	/**
	 * Optional patient marital status
	 */
	public MaritalStatus: MaritalStatus;
	/**
	 * Optional patient email address
	 */
	public Email: string;
	/**
	 * Optional additional info specific to the patient. Typically encoded in JSON
	 */
	public AdditionalInfo: string;
	/**
	 * Optionally supply the patient's home address
	 */
	public Address: Address;
	/**
	 * ICD-10 Diagnosis supporting the procedure.  This code is typically the foundation code 
	 * used when generating Dx codes based on the results of the exam.
	 */
	public DxCode: string;
	/**
	 * Identifier as specified by the submitting organization. 
	 * Typically MRN
	 */
	public LocalId: string;
	/**
	 * Patient first and last name (required)
	 */
	public Name: PersonName;
	/**
	 * Date of birth (required). Must be parsable as a full date
	 */
	public Dob: string;
	/**
	 * Obsolete Gender specification.  Use addGender method
	 */
	public Gender: Gender;
	/**
	 * Optional patient phone number
	 */
	public Phone: string;
	/**
	 * Collection of gender declarations
	 */
	public Genders: PersonGender[];
	/**
	 * Helper method for adding one or more genders 
	 * @param context 
	 * @param gender 
	 */
	public addGender(context: GenderContext, gender: Gender) {
		let nextIndex = this.Genders.length;
		this.Genders[nextIndex] = new PersonGender();
		this.Genders[nextIndex].Context = context;
		this.Genders[nextIndex].Value = gender;
	}
}
class RequestPCP
{
	constructor() {
		this.Name = new PersonName();
	}

	public Name: PersonName;
	public NPI: string;
	public EmailAddress: string;
	public FaxNumber: string;
}
class RequestProvider
{
	constructor() {
		this.Name = new PersonName();
	}

	public NPI: string;
	public Name: PersonName;
	public Associations: string;
	public Degrees: string;
	public Taxonomy: string;
	public Email: string;
}
/**
 * Structure for IRIS site
 */
export class RequestSite
{
	constructor() {
		this.Address = new Address();	
	}
	/**
	 * Optionall supply the name of the site.  
	 * Typically only supplied when configured for automatic site addition
	 */
	public Name: string;
	/**
	 * If provided for creating a new site, you must include the US State the site resides in
	 */
	public Address: Address;
	/**
	 * Site identifier that is specified by the submitting organization.  This identifier must be configured by IRIS
	 * if the site was not automatically added. Otherwise contact IRIS support to get the valid site identifiers registered to you
	 */
	public LocalId: string;
}
class ResultCameraOperator
{
	
	public Name: PersonName;
	public Notes: Note[];
	public UserName: string;
}
class ResultEyeSideGrading
{
	public Findings: ResultFinding[];
	public Gradable: boolean;
	public UngradableReasons: string[];
	public MissingEyeReason: string;
}
class ResultFinding
{
	public Finding: string;
	public Result: string;
}
class ResultGrading
{
	public CarePlanDescription: string;
	public CarePlanName: string;
	public DxCodes: string[];
	public DiagnosisCodes: DiagnosisCode[];
	public GradedTime: any;
	public Notes: Note[];
	public OD: ResultEyeSideGrading;
	public OS: ResultEyeSideGrading;
	public Pathology: boolean;
	public Provider: ResultProvider;
	public Urgent: boolean;
}
class ResultHealthPlan
{
	public LocalId: string;
	public Name: string;
	public MemberId: string;
	public HealthPlanPayerName: string;
	public GroupName: string;
	public GroupNumber: string;
	public EffectiveDate: string;
	public ExpirationDate: string;
	public PolicyNumber: string;
}
class ResultImage
{
	public OrderImageID: number;
	public Camera: BaseCamera;
	public FileName: string;
	public Received: any;
	public ContainerName: string;
	public LocalId: string;
	public Taken: any;
	public GroupId: number;
	public GroupOrdinal: number;
	public Laterality: Laterality;
	public ImageContext: ImageContext;
	public ParentLocalId: string;
}
class ResultImageDetails
{
	public LeftEyeCount: number;
	public LeftEyeEnhancedCount: number;
	public LeftEyeOriginalCount: number;
	public RightEyeCount: number;
	public RightEyeEnhancedCount: number;
	public RightEyeOriginalCount: number;
	public SingleEyeOnly: boolean;
	public TotalCount: number;
}
class ResultOrder
{
	public Expedite: boolean;
	public PatientOrderID: number;
	public ServicedTime: any;
	public Status: string;
	public CreatedTime: any;
	public ScheduledTime: any;
	public LocalId: string;
	public State: string;
	public SingleEyeOnly: boolean;
	public MissingEyeReason: string;
	public AdditionalInfo: string;
	public EncounterNumber: string;
	public EvaluationTypes: EvaluationType[];
	public StudyInstanceUniqueId: string;
	public DepartmentId: string;
	public OrderableIdentifier: string;
}
class ResultPatient
{
	public PatientId: number;
	public LocalId: string;
	public Name: PersonName;
	public Dob: string;
	public Gender: Gender;
	public Phone: string;
	public Genders: PersonGender[];
}
class ResultProvider
{
	public NPI: string;
	public Name: PersonName;
	public Associations: string;
	public Degrees: string;
	public Taxonomy: string;
	public Email: string;
}
class ResultsDocument
{
	public Content: string;
	public Encoding: string;
	public Type: string;
}
class ResultSite
{
	public LocalId: string;
}
class RequestCameraOperator
{
	constructor() {
		this.Name = new PersonName();	
	}
	public NPI: string;
	public Name: PersonName;
	public Associations: string;
	public Degrees: string;
	public Taxonomy: string;
	public Email: string;
}
/**
 * Root class for a new order submission
 */
export class OrderRequest
{
	constructor(clientGuid: string) {
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
		this.ClientGuid = clientGuid;
		}
	/**
	 * If provided, identifies the user submitting the order.
	 * This must match an active User registered in the IRIS system.
	 */
	public UserNameSubmitting: string;
	/**
	 * Specifies the submission type (e.g.: New order, update, cancel)
	 * Loosely follows HL7 standards with IRIS extensions
	 */
	public OrderControlCode: OrderControlCode;
	/**
	 * If provide this identifies the camera submitting images for the order.
	 * This must match a camera assigned to the submitting organization
	 */
	public Camera: RequestCamera;
	/**
	 * Order specific details
	 */
	public Order: RequestOrder;
	/**
	 * Patient details - Must provide at minimum: LocalId, First, Last, DOB and Gender
	 */
	public Patient: RequestPatient;
	/**
	 * Optionally specify the provider submitting the order for the exam
	 */
	public OrderingProvider: RequestProvider;
	/**
	 * Optionally specify the provider referring the patient to the submitting organization
	 */
	public ReferringProvider: RequestProvider;
	/**
	 * Optionally specify the provider who will perform the exam
	 */
	public CameraOperator: RequestProvider;
	/**
	 * Optionally specify the username of the IRIS registered user who will be capturing images
	 */
	public CameraOperatorUserName: string;
	/**
	 * Optional Healthplan details
	 */
	public HealthPlan: RequestHealthPlan;
	/**
	 * REQUIRED - Submitting organizations unique identifier supplied by IRIS
	 */
	public ClientGuid: string;
	public Site: RequestSite;
	public Version: string;
}
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
abstract class BaseImageRequest
{
	constructor() {
		this.Image = new RequestImage();	
		this.Camera = new BaseCamera();
		this.Site = new RequestSite();
	}
	public Image: RequestImage;
	public ImageClass: ImageClass;
	public ImageEncoding: ImageEncoding;
	public TotalImageCountForOrder: number;
	public ItemNumberInCollection: number;
	public Camera: BaseCamera;
	public ClientGuid: string;
	public Site: RequestSite;
	public Version: string;
}
class GradingReceipt
{
	public TransactionId: string;
	public Timestamp: any;
	public IrisOrderId: number;
	public OrderLocalId: string;
	public PatientLocalId: string;
	public Success: boolean;
	public ErrorMessage: string;
	public ResultObjectType: string;
	public Version: string;
}
class GradingRequest
{
	public OD: ResultEyeSideGrading;
	public OS: ResultEyeSideGrading;
	public LocalId: string;
	public ClientGuid: string;
	public Site: RequestSite;
	public Version: string;
}
class ImageReceipt
{
	public TransactionId: string;
	public Timestamp: any;
	public ImageLocalId: string;
	public IrisImageId: number;
	public IrisOrderId: number;
	public OrderLocalId: string;
	public PatientLocalId: string;
	public Success: boolean;
	public ErrorMessage: string;
	public ResultObjectType: string;
	public Version: string;
}
class ImageRequest
{
	constructor() {
		this.Image = new RequestImage();	
		this.Camera = new BaseCamera();
		this.Site = new RequestSite();
	}
	public OrderLocalId: string;
	public Image: RequestImage;
	public ImageClass: ImageClass;
	public ImageEncoding: ImageEncoding;
	public TotalImageCountForOrder: number;
	public ItemNumberInCollection: number;
	public Camera: BaseCamera;
	public ClientGuid: string;
	public Site: RequestSite;
	public Version: string;
}
class OrderReceipt
{
	public TransactionId: string;
	public Timestamp: any;
	public IrisOrderId: number;
	public OrderLocalId: string;
	public PatientLocalId: string;
	public Success: boolean;
	public ErrorMessage: string;
	public ResultObjectType: string;
	public Version: string;
}
class DiagnosisCode
{
	public Code: string;
	public Description: string;
}
export class PersonGender
{
	public Context: GenderContext;
	public Value: Gender;
}
abstract class EvaluationTypeExtensions
{
}
abstract class GradingConstants
{
}
abstract class ResultObjectType
{
	public static OrderCreationReceipt: string = `OrderCreationReceipt`;
	public static OrderResult: string = `OrderResult`;
	public static ImageReceipt: string = `ImageReceipt`;
	public static GradingReceipt: string = `GradingReceipt`;
}
abstract class FindingConstants
{
	public static None: string = `None`;
	public static Normal: string = `Normal`;
	public static Abnormal: string = `Abnormal`;
	public static NotGradable: string = `Not Gradable`;
	public static DiabeticRetinopathy: string = `Diabetic Retinopathy`;
	public static MacularEdema: string = `Macular Edema`;
	public static Glaucoma: string = `Glaucoma`;
	public static SuspectedVeinOcclusion: string = `Suspected Vein Occlusion`;
	public static SuspectedWetAMD: string = `Suspected Wet AMD`;
	public static SuspectedHTNRetinopathy: string = `Suspected HTN Retinopathy`;
	public static SuspectedEpiretinalMembrane: string = `Suspected Epiretinal Membrane`;
	public static SuspectedMacularHole: string = `Suspected Macular Hole`;
	public static SuspectedCataract: string = `Suspected Cataract`;
	public static SuspectedOtherDisease: string = `Suspected Other Disease`;
	public static SuspectedDryAMD: string = `Suspected Dry AMD`;
	public static SuspectedGlaucoma: string = `Suspected Glaucoma`;
	public static ParacentralDefect: string = `Paracentral Defect`;
	public static PeripheralDefect: string = `Peripheral Defect`;
	public static SuspectedGeographicAtrophy: string = `Suspected Geographic Atrophy`;
	public static FixationError: string = `Fixation Error`;
	public static Other: string = `Other`;
	public static FalsePositive: string = `False Positive`;
	public static FalseNegative: string = `False Negative`;
	public static HIVRetinopathy: string = `HIV Retinopathy`;
	public static SuspectedDiabeticRetinopathyMildOnly: string = `Suspected Diabetic Retinopathy - Mild Only`;
	public static SuspectedDiabeticRetinopathyModeratetoProliferative: string = `Suspected Diabetic Retinopathy - Moderate to Proliferative`;
	public static SuspectedMacularEdema: string = `Suspected Macular Edema`;
	public static Suspecteddiscedema: string = `Suspected disc edema`;
	public static Suspectedbilateralpapilledema: string = `Suspected bilateral papilledema`;
	public static DryAMD: string = `Dry AMD`;
	public static WetAMD: string = `Wet AMD`;
}
abstract class ResultConstants
{
	public static AdvAtrophicSubfovealInvolvement: string = `Adv. Atrophic w/ Subfoveal Involvement`;
	public static AdvAtrophic: string = `Adv. Atrophic w/o Subfoveal Involvement`;
	public static EarlyStage: string = `Early Stage`;
	public static FalseNegative: string = `False Negative`;
	public static FalsePositive: string = `False Positive`;
	public static Indeterminable: string = `Indeterminable`;
	public static IntermediateStage: string = `Intermediate Stage`;
	public static Mild: string = `Mild`;
	public static Moderate: string = `Moderate`;
	public static NoObservable: string = `No Observable`;
	public static None: string = `None`;
	public static NotGradable: string = `Not Gradable`;
	public static Positive: string = `Positive`;
	public static Proliferative: string = `Proliferative`;
	public static Severe: string = `Severe`;
}
abstract class UngradableConstants
{
	public static DilationOpportunityMissed: string = `Dilation Opportunity Missed`;
	public static InsufficientViewofOpticNerve: string = `Insufficient View of Optic Nerve`;
	public static DirtyLens: string = `Dirty Lens`;
	public static MediaOpacity: string = `Media Opacity`;
	public static EyelashesOccludingView: string = `Eyelashes Occluding View`;
	public static InsufficientViewofMacula: string = `Insufficient View of Macula`;
	public static NoViewtoRetina: string = `No View to Retina`;
	public static ImageOutofFocus: string = `Image Out of Focus`;
	public static CameraAngleCausingLightShadowPresentBlockingViewofRetina: string = `Camera Angle Causing Light Shadow Present Blocking View of Retina`;
	public static ImagenotofaRetina: string = `Image not of a Retina`;
}

/**
 * Send order to IRIS
  * @param order Hydrated order request object to send to IRIS
  */
export async function SendOrder( order: OrderRequest) {

	let config: Config = require('./config.json');

	var ordersCxString = config.ServiceBusConnectionStrings.Orders;

	if (ordersCxString == '') {
		console.log(`Must set the connection string for Orders in config.json`);
		return;
	}


    // Wrap in body for service bus queue
    const sbmsg = { body: order };

    // create a Service Bus client using the connection string to the Service Bus namespace
    const serviceBusClient = new ServiceBusClient(ordersCxString);

    // createSender() can also be used to create a sender for a topic.
    const serviceBusSender: ServiceBusSender = serviceBusClient.createSender("orders");

    try {
        
        await serviceBusSender.sendMessages(sbmsg);
        console.log(`Sent order to queue: ${"orders"}`);

        // Close the sender
        await serviceBusSender.close();
    } finally {
        await serviceBusClient.close();
    }
}

/** Callback type for Results */
export type ResultsCallbackType = (res: OrderResult) => void;

/**
 * Wait for results to be published
 * @param timeoutseconds Number of seconds before wait quits. 0 = forever
 */
export async function WaitResults(cb: ResultsCallbackType, timeoutseconds: number) {
	let config: Config = require('./config.json');
 
	if (config.ServiceBusConnectionStrings.Results == '') {
		console.log(`Must set the connection string for Results in config.json`);
		return;
	}

    const sbClient = new ServiceBusClient(config.ServiceBusConnectionStrings.Results);
    const receiver = sbClient.createReceiver("results");

    try {
        const subscription = receiver.subscribe({
        // After executing this callback you provide, the receiver will remove the message from the queue if you
        // have not already settled the message in your callback.
        // You can disable this by passing `false` to the `autoCompleteMessages` option in the `subscribe()` method.
        // If your callback _does_ throw an error before the message is settled, then it will be abandoned.
        processMessage: async (brokeredMessage: ServiceBusReceivedMessage) => {
            var res:OrderResult = brokeredMessage.body;
            console.log(`Received message on results queue`);
			cb(res);

        },
        // This callback will be called for any error that occurs when either in the receiver when receiving the message
        // or when executing your `processMessage` callback or when the receiver automatically completes or abandons the message.
        processError: async (args: ProcessErrorArgs) => {
            console.log(`Error from source ${args.errorSource} occurred: `, args.error);

            // the `subscribe() call will not stop trying to receive messages without explicit intervention from you.
            if (isServiceBusError(args.error)) {
            switch (args.error.code) {
                case "MessagingEntityDisabled":
                case "MessagingEntityNotFound":
                case "UnauthorizedAccess":
                // It's possible you have a temporary infrastructure change (for instance, the entity being
                // temporarily disabled). The handler will continue to retry if `close()` is not called on the subscription - it is completely up to you
                // what is considered fatal for your program.
                console.log(
                    `An unrecoverable error occurred. Stopping processing. ${args.error.code}`,
                    args.error,
                );
                await subscription.close();
                break;
                case "MessageLockLost":
                console.log(`Message lock lost for message`, args.error);
                break;
                case "ServiceBusy":
                // choosing an arbitrary amount of time to wait.
                await delay(1000);
                break;
            }
            }
        },
        });

		if (timeoutseconds > 0)
			await delay(timeoutseconds * 1000);
		else
		{
			while(1);
		}

        console.log(`End wait for results...`);
        await receiver.close();
    } finally {
        await sbClient.close();
    }

}

/** Callback type for Events */
export type EventsCallbackType = (res: any) => void; 

/**
 * Wait for new order events
 * @param cb Callback for new events
 * @param timeoutseconds Timeout in seconds before wait ends. 0 = forever
 * @returns 
 */
export async function WaitEvents(cb: EventsCallbackType, timeoutseconds: number) {
	let config: Config = require('./config.json');
 
	if (config.ServiceBusConnectionStrings.Events == '') {
		console.log(`Must set the connection string for Results in config.json`);
		return;
	}

    const sbClient = new ServiceBusClient(config.ServiceBusConnectionStrings.Events);
    const receiver = sbClient.createReceiver("events");

    try {
        const subscription = receiver.subscribe({
        // After executing this callback you provide, the receiver will remove the message from the queue if you
        // have not already settled the message in your callback.
        // You can disable this by passing `false` to the `autoCompleteMessages` option in the `subscribe()` method.
        // If your callback _does_ throw an error before the message is settled, then it will be abandoned.
        processMessage: async (brokeredMessage: ServiceBusReceivedMessage) => {
            var res:OrderResult = brokeredMessage.body;
            console.log(`Received message on events queue`);
			cb(res);

        },
        // This callback will be called for any error that occurs when either in the receiver when receiving the message
        // or when executing your `processMessage` callback or when the receiver automatically completes or abandons the message.
        processError: async (args: ProcessErrorArgs) => {
            console.log(`Error from source ${args.errorSource} occurred: `, args.error);

            // the `subscribe() call will not stop trying to receive messages without explicit intervention from you.
            if (isServiceBusError(args.error)) {
            switch (args.error.code) {
                case "MessagingEntityDisabled":
                case "MessagingEntityNotFound":
                case "UnauthorizedAccess":
                // It's possible you have a temporary infrastructure change (for instance, the entity being
                // temporarily disabled). The handler will continue to retry if `close()` is not called on the subscription - it is completely up to you
                // what is considered fatal for your program.
                console.log(
                    `An unrecoverable error occurred. Stopping processing. ${args.error.code}`,
                    args.error,
                );
                await subscription.close();
                break;
                case "MessageLockLost":
                console.log(`Message lock lost for message`, args.error);
                break;
                case "ServiceBusy":
                // choosing an arbitrary amount of time to wait.
                await delay(1000);
                break;
            }
            }
        },
        });

		if (timeoutseconds > 0)
			await delay(timeoutseconds * 1000);
		else
		{
			while(1);
		}

        console.log(`End wait for order events...`);
        await receiver.close();
    } finally {
        await sbClient.close();
    }

}