"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultPatient = void 0;
class ResultPatient {
    constructor(patientId, name, dob, gender, phone, genders = []) {
        this.LocalId = ""; // Initialize to an empty string
        this.Dob = ""; // Initialize to an empty string
        this.Phone = ""; // Initialize to an empty string
        this.Genders = []; // Initialize to an empty array
        this.PatientId = patientId; // Initialize with the provided PatientId
        this.Name = name; // Initialize with the provided PersonName instance
        this.Dob = dob; // Initialize with the provided date of birth
        this.Gender = gender; // Initialize with the provided Gender
        this.Phone = phone; // Initialize with the provided phone number
        this.Genders = genders; // Initialize with the provided array of PersonGender
    }
}
exports.ResultPatient = ResultPatient;
