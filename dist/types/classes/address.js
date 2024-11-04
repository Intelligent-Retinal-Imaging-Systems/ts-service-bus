"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(street1, street2, city, state, zip, postalCode, region, province, territory, country) {
        this.Street1 = ""; // Initialize to an empty string
        this.Street2 = ""; // Initialize to an empty string
        this.City = ""; // Initialize to an empty string
        this.State = ""; // Initialize to an empty string
        this.Zip = ""; // Initialize to an empty string
        this.PostalCode = ""; // Initialize to an empty string
        this.Region = ""; // Initialize to an empty string
        this.Province = ""; // Initialize to an empty string
        this.Territory = ""; // Initialize to an empty string
        this.Country = ""; // Initialize to an empty string
        this.Street1 = street1 || this.Street1; // Use provided value or default
        this.Street2 = street2 || this.Street2; // Use provided value or default
        this.City = city || this.City; // Use provided value or default
        this.State = state || this.State; // Use provided value or default
        this.Zip = zip || this.Zip; // Use provided value or default
        this.PostalCode = postalCode || this.PostalCode; // Use provided value or default
        this.Region = region || this.Region; // Use provided value or default
        this.Province = province || this.Province; // Use provided value or default
        this.Territory = territory || this.Territory; // Use provided value or default
        this.Country = country || this.Country; // Use provided value or default
    }
}
exports.Address = Address;
