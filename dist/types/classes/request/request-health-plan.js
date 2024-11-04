"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHealthPlan = void 0;
const __1 = require("../../");
class RequestHealthPlan {
    constructor(primaryCareProvider, localId, name, memberId, healthPlanPayerName, groupName, groupNumber, effectiveDate, expirationDate, policyNumber) {
        this.PrimaryCareProvider = new __1.RequestPCP();
        this.LocalId = "";
        this.Name = "";
        this.MemberId = "";
        this.HealthPlanPayerName = "";
        this.GroupName = "";
        this.GroupNumber = "";
        this.EffectiveDate = "";
        this.ExpirationDate = "";
        this.PolicyNumber = "";
        if (primaryCareProvider)
            this.PrimaryCareProvider = primaryCareProvider;
        if (localId)
            this.LocalId = localId;
        if (name)
            this.Name = name;
        if (memberId)
            this.MemberId = memberId;
        if (healthPlanPayerName)
            this.HealthPlanPayerName = healthPlanPayerName;
        if (groupName)
            this.GroupName = groupName;
        if (groupNumber)
            this.GroupNumber = groupNumber;
        if (effectiveDate)
            this.EffectiveDate = effectiveDate;
        if (expirationDate)
            this.ExpirationDate = expirationDate;
        if (policyNumber)
            this.PolicyNumber = policyNumber;
    }
}
exports.RequestHealthPlan = RequestHealthPlan;
