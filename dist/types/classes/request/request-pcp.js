"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPCP = void 0;
const __1 = require("../../");
class RequestPCP {
    constructor(name, npi, emailAddress, faxNumber) {
        this.Name = name || new __1.PersonName(); // Initialize with the provided name or a new instance of PersonName
        this.NPI = npi; // Set the NPI if provided
        this.EmailAddress = emailAddress; // Set the EmailAddress if provided
        this.FaxNumber = faxNumber; // Set the FaxNumber if provided
    }
}
exports.RequestPCP = RequestPCP;
