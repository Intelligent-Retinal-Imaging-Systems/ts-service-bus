"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultProvider = void 0;
class ResultProvider {
    constructor(npi, name, email, associations, degrees, taxonomy) {
        this.NPI = npi;
        this.Name = name;
        this.Email = email;
        this.Associations = associations;
        this.Degrees = degrees;
        this.Taxonomy = taxonomy;
    }
}
exports.ResultProvider = ResultProvider;
