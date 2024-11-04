import { DiagnosisCode, Note, ResultEyeSideGrading, ResultProvider } from "../../";

export class ResultGrading {
    public CarePlanDescription: string;
    public CarePlanName: string;
    public DxCodes: string[] = [];  // Initialize as an empty array
    public DiagnosisCodes: DiagnosisCode[] = [];  // Initialize as an empty array
    public GradedTime: Date;  // Use Date type for time
    public Notes: Note[] = [];  // Initialize as an empty array
    public OD: ResultEyeSideGrading;
    public OS: ResultEyeSideGrading;
    public Pathology: boolean;
    public Provider: ResultProvider;
    public Urgent: boolean;

    constructor(
        carePlanDescription: string,
        carePlanName: string,
        gradedTime: Date,
        od: ResultEyeSideGrading,
        os: ResultEyeSideGrading,
        pathology: boolean,
        provider: ResultProvider,
        urgent: boolean,
        dxCodes: string[] = [],
        diagnosisCodes: DiagnosisCode[] = [],
        notes: Note[] = []
    ) {
        this.CarePlanDescription = carePlanDescription;
        this.CarePlanName = carePlanName;
        this.GradedTime = gradedTime;
        this.OD = od;
        this.OS = os;
        this.Pathology = pathology;
        this.Provider = provider;
        this.Urgent = urgent;
        this.DxCodes = dxCodes;
        this.DiagnosisCodes = diagnosisCodes;
        this.Notes = notes;
    }
}
