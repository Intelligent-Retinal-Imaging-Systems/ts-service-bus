export class ResultHealthPlan {
    public LocalId: string;
    public Name: string;
    public MemberId: string;
    public HealthPlanPayerName: string;
    public GroupName: string;
    public GroupNumber: string;
    public EffectiveDate: Date;
    public ExpirationDate: Date;
    public PolicyNumber: string;

    constructor(
        localId: string,
        name: string,
        memberId: string,
        healthPlanPayerName: string,
        groupName: string,
        groupNumber: string,
        effectiveDate: Date,
        expirationDate: Date,
        policyNumber: string
    ) {
        this.LocalId = localId;
        this.Name = name;
        this.MemberId = memberId;
        this.HealthPlanPayerName = healthPlanPayerName;
        this.GroupName = groupName;
        this.GroupNumber = groupNumber;
        this.EffectiveDate = effectiveDate;
        this.ExpirationDate = expirationDate;
        this.PolicyNumber = policyNumber;
    }
}
