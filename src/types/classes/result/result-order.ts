import { EvaluationType } from "../../";

export class ResultOrder {
    public Expedite: boolean;
    public PatientOrderID: number;
    public ServicedTime: Date;  // Use Date type for timestamps
    public Status: string;
    public CreatedTime: Date;  // Use Date type for timestamps
    public ScheduledTime: Date;  // Use Date type for timestamps
    public LocalId: string;
    public State: string;
    public SingleEyeOnly: boolean;
    public MissingEyeReason?: string;  // Optional if it may not be set
    public AdditionalInfo?: string;    // Optional for additional data
    public EncounterNumber: string;
    public EvaluationTypes: EvaluationType[] = [];  // Initialize as empty array
    public StudyInstanceUniqueId: string;
    public DepartmentId: string;
    public OrderableIdentifier: string;

    constructor(
        expedite: boolean,
        patientOrderID: number,
        servicedTime: Date,
        status: string,
        createdTime: Date,
        scheduledTime: Date,
        localId: string,
        state: string,
        singleEyeOnly: boolean,
        encounterNumber: string,
        studyInstanceUniqueId: string,
        departmentId: string,
        orderableIdentifier: string,
        missingEyeReason?: string,
        additionalInfo?: string,
        evaluationTypes: EvaluationType[] = []
    ) {
        this.Expedite = expedite;
        this.PatientOrderID = patientOrderID;
        this.ServicedTime = servicedTime;
        this.Status = status;
        this.CreatedTime = createdTime;
        this.ScheduledTime = scheduledTime;
        this.LocalId = localId;
        this.State = state;
        this.SingleEyeOnly = singleEyeOnly;
        this.EncounterNumber = encounterNumber;
        this.StudyInstanceUniqueId = studyInstanceUniqueId;
        this.DepartmentId = departmentId;
        this.OrderableIdentifier = orderableIdentifier;
        this.MissingEyeReason = missingEyeReason;
        this.AdditionalInfo = additionalInfo;
        this.EvaluationTypes = evaluationTypes;
    }
}
