import { EvaluationType } from "../../enums";

class BaseOrder {
    public CreatedTime: Date; // Change to Date for better type safety
    public ScheduledTime: Date; // Change to Date for better type safety
    public LocalId: string = ""; // Initialize to an empty string
    public State: string = ""; // Initialize to an empty string
    public SingleEyeOnly: boolean = false; // Initialize to false
    public MissingEyeReason: string = ""; // Initialize to an empty string
    public AdditionalInfo: string = ""; // Initialize to an empty string
    public EncounterNumber: string = ""; // Initialize to an empty string
    public EvaluationTypes: EvaluationType[] = []; // Initialize to an empty array
    public StudyInstanceUniqueId: string = ""; // Initialize to an empty string
    public DepartmentId: string = ""; // Initialize to an empty string
    public OrderableIdentifier: string = ""; // Initialize to an empty string

    constructor(
        createdTime?: Date,
        scheduledTime?: Date,
        localId?: string,
        state?: string,
        singleEyeOnly?: boolean,
        missingEyeReason?: string,
        additionalInfo?: string,
        encounterNumber?: string,
        evaluationTypes?: EvaluationType[],
        studyInstanceUniqueId?: string,
        departmentId?: string,
        orderableIdentifier?: string
    ) {
        this.CreatedTime = createdTime || new Date(); // Default to the current date and time
        this.ScheduledTime = scheduledTime || new Date(); // Default to the current date and time
        this.LocalId = localId || this.LocalId; // Use provided value or default
        this.State = state || this.State; // Use provided value or default
        this.SingleEyeOnly = singleEyeOnly ?? this.SingleEyeOnly; // Use provided value or default
        this.MissingEyeReason = missingEyeReason || this.MissingEyeReason; // Use provided value or default
        this.AdditionalInfo = additionalInfo || this.AdditionalInfo; // Use provided value or default
        this.EncounterNumber = encounterNumber || this.EncounterNumber; // Use provided value or default
        this.EvaluationTypes = evaluationTypes || this.EvaluationTypes; // Use provided value or default
        this.StudyInstanceUniqueId = studyInstanceUniqueId || this.StudyInstanceUniqueId; // Use provided value or default
        this.DepartmentId = departmentId || this.DepartmentId; // Use provided value or default
        this.OrderableIdentifier = orderableIdentifier || this.OrderableIdentifier; // Use provided value or default
    }
}
