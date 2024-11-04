export class ResultImageDetails {
    public LeftEyeCount: number;
    public LeftEyeEnhancedCount: number;
    public LeftEyeOriginalCount: number;
    public RightEyeCount: number;
    public RightEyeEnhancedCount: number;
    public RightEyeOriginalCount: number;
    public SingleEyeOnly: boolean;

    constructor(
        leftEyeCount: number,
        leftEyeEnhancedCount: number,
        leftEyeOriginalCount: number,
        rightEyeCount: number,
        rightEyeEnhancedCount: number,
        rightEyeOriginalCount: number,
        singleEyeOnly: boolean
    ) {
        this.LeftEyeCount = leftEyeCount;
        this.LeftEyeEnhancedCount = leftEyeEnhancedCount;
        this.LeftEyeOriginalCount = leftEyeOriginalCount;
        this.RightEyeCount = rightEyeCount;
        this.RightEyeEnhancedCount = rightEyeEnhancedCount;
        this.RightEyeOriginalCount = rightEyeOriginalCount;
        this.SingleEyeOnly = singleEyeOnly;
    }
}
