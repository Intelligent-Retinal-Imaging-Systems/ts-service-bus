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