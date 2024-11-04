import { ResultFinding } from "../../";

export class ResultEyeSideGrading {
    public Findings: ResultFinding[] = [];
    public Gradable: boolean;
    public UngradableReasons: string[] = [];
    public MissingEyeReason?: string;

    constructor(gradable: boolean, missingEyeReason?: string) {
        this.Gradable = gradable;
        this.MissingEyeReason = missingEyeReason || '';
    }
}
