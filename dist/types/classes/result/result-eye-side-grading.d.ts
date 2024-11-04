import { ResultFinding } from "../../";
export declare class ResultEyeSideGrading {
    Findings: ResultFinding[];
    Gradable: boolean;
    UngradableReasons: string[];
    MissingEyeReason?: string;
    constructor(gradable: boolean, missingEyeReason?: string);
}
