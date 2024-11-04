"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPatient = void 0;
const __1 = require("../../");
/**
 * Patient details structure
 */
class RequestPatient {
    constructor() {
        /**
         * Optional home address of the patient
         */
        this.Address = new __1.Address();
        /**
         * Patient's first and last name (required)
         */
        this.Name = new __1.PersonName();
        /**
         * Collection of gender declarations
         */
        this.Genders = [];
        this.Genders = new Array();
        this.Address = new __1.Address();
        this.Name = new __1.PersonName();
    }
    /**
     * Helper method for adding one or more genders
     * @param context
     * @param gender
     */
    addGender(context, gender) {
        let nextIndex = this.Genders.length;
        this.Genders[nextIndex] = new __1.PersonGender();
        this.Genders[nextIndex].Context = context;
        this.Genders[nextIndex].Value = gender;
    }
}
exports.RequestPatient = RequestPatient;
