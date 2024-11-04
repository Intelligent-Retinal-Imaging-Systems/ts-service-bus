import { Gender, GenderContext, PersonGender, Address, PersonName, MaritalStatus } from "../../";
/**
 * Patient details structure
 */
export declare class RequestPatient {
    /**
     * Optional race
     */
    Race?: string;
    /**
     * Optional ethnicity
     */
    Ethnicity?: string;
    /**
     * Optional language
     */
    PrimaryLanguage?: string;
    /**
     * Optional patient marital status
     */
    MaritalStatus?: MaritalStatus;
    /**
     * Optional patient email address
     */
    Email?: string;
    /**
     * Optional additional info specific to the patient. Typically encoded in JSON
     */
    AdditionalInfo?: string;
    /**
     * Optional home address of the patient
     */
    Address: Address;
    /**
     * ICD-10 Diagnosis supporting the procedure. Typically the foundation code
     * used when generating Dx codes based on the results of the exam.
     */
    DxCode?: string;
    /**
     * Identifier as specified by the submitting organization. Typically MRN
     */
    LocalId?: string;
    /**
     * Patient's first and last name (required)
     */
    Name: PersonName;
    /**
     * Date of birth (required). Should be a full date
     */
    Dob?: string;
    /**
     * Obsolete Gender specification. Use addGender method
     */
    Gender?: Gender;
    /**
     * Optional patient phone number
     */
    Phone?: string;
    /**
     * Collection of gender declarations
     */
    Genders: PersonGender[];
    constructor();
    /**
     * Helper method for adding one or more genders
     * @param context
     * @param gender
     */
    addGender(context: GenderContext, gender: Gender): void;
}
