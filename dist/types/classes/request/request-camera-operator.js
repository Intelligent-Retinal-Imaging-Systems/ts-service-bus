"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCameraOperator = void 0;
const __1 = require("../../");
class RequestCameraOperator {
    constructor(npi, name, associations, degrees, taxonomy, email) {
        this.NPI = "";
        this.Name = new __1.PersonName();
        this.Associations = "";
        this.Degrees = "";
        this.Taxonomy = "";
        this.Email = "";
        if (npi)
            this.NPI = npi;
        if (name)
            this.Name = name;
        if (associations)
            this.Associations = associations;
        if (degrees)
            this.Degrees = degrees;
        if (taxonomy)
            this.Taxonomy = taxonomy;
        if (email)
            this.Email = email;
    }
}
exports.RequestCameraOperator = RequestCameraOperator;
