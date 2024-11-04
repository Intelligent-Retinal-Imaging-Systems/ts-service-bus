"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePatient = void 0;
const __1 = require("../../");
class BasePatient {
    constructor(localId = '', // Default value
    dob = '', // Default value
    gender = __1.Gender.U, // Assuming 'Unknown' is a valid default value in the Gender enum
    phone = '', // Default value
    genders = [] // Default to an empty array
    ) {
        this.LocalId = localId;
        this.Name = new __1.PersonName(); // Initialize as a new PersonName object
        this.Dob = dob;
        this.Gender = gender;
        this.Phone = phone;
        this.Genders = genders;
    }
}
exports.BasePatient = BasePatient;
