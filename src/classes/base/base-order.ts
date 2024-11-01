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