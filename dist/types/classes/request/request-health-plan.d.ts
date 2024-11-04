import { RequestPCP } from "../../";
export declare class RequestHealthPlan {
    PrimaryCareProvider: RequestPCP;
    LocalId: string;
    Name: string;
    MemberId: string;
    HealthPlanPayerName: string;
    GroupName: string;
    GroupNumber: string;
    EffectiveDate: string;
    ExpirationDate: string;
    PolicyNumber: string;
    constructor(primaryCareProvider?: RequestPCP, localId?: string, name?: string, memberId?: string, healthPlanPayerName?: string, groupName?: string, groupNumber?: string, effectiveDate?: string, expirationDate?: string, policyNumber?: string);
}
