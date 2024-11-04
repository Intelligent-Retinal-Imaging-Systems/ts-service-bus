"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProvider = void 0;
const __1 = require("../../");
class BaseProvider {
    constructor(npi = '', // Default value
    associations = '', // Default value
    degrees = '', // Default value
    taxonomy = '', // Default value
    email = '' // Default value
    ) {
        this.NPI = npi;
        this.Name = new __1.PersonName(); // Initialize as a new PersonName object
        this.Associations = associations;
        this.Degrees = degrees;
        this.Taxonomy = taxonomy;
        this.Email = email;
    }
}
exports.BaseProvider = BaseProvider;
