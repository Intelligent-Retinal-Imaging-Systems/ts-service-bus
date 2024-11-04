"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultHealthPlan = void 0;
class ResultHealthPlan {
    constructor(localId, name, memberId, healthPlanPayerName, groupName, groupNumber, effectiveDate, expirationDate, policyNumber) {
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
exports.ResultHealthPlan = ResultHealthPlan;
