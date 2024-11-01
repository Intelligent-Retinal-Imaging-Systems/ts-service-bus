class RequestHealthPlan {
    public PrimaryCareProvider: RequestPCP = new RequestPCP();
    public LocalId: string = "";
    public Name: string = "";
    public MemberId: string = "";
    public HealthPlanPayerName: string = "";
    public GroupName: string = "";
    public GroupNumber: string = "";
    public EffectiveDate: string = "";
    public ExpirationDate: string = "";
    public PolicyNumber: string = "";

    constructor(
        primaryCareProvider?: RequestPCP,
        localId?: string,
        name?: string,
        memberId?: string,
        healthPlanPayerName?: string,
        groupName?: string,
        groupNumber?: string,
        effectiveDate?: string,
        expirationDate?: string,
        policyNumber?: string
    ) {
        if (primaryCareProvider) this.PrimaryCareProvider = primaryCareProvider;
        if (localId) this.LocalId = localId;
        if (name) this.Name = name;
        if (memberId) this.MemberId = memberId;
        if (healthPlanPayerName) this.HealthPlanPayerName = healthPlanPayerName;
        if (groupName) this.GroupName = groupName;
        if (groupNumber) this.GroupNumber = groupNumber;
        if (effectiveDate) this.EffectiveDate = effectiveDate;
        if (expirationDate) this.ExpirationDate = expirationDate;
        if (policyNumber) this.PolicyNumber = policyNumber;
    }
}
