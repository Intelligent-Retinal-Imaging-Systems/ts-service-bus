import {PersonGender} from "../person-gender";
import {Gender} from "../../enums";

/**
 * Patient details structure
 */
export class RequestPatient
{
    constructor() {
        this.Genders = new Array<PersonGender>();
        this.Address = new Address();
        this.Name = new PersonName();
    }

    /**
     * Optional race
     */
    public Race: string;
    /**
     * Optional ethnicity
     */
    public Ethnicity: string;
    /**
     * Optional language
     */
    public PrimaryLanguage: string;
    /**
     * Optional patient marital status
     */
    public MaritalStatus: MaritalStatus;
    /**
     * Optional patient email address
     */
    public Email: string;
    /**
     * Optional additional info specific to the patient. Typically encoded in JSON
     */
    public AdditionalInfo: string;
    /**
     * Optionally supply the patient's home address
     */
    public Address: Address;
    /**
     * ICD-10 Diagnosis supporting the procedure.  This code is typically the foundation code
     * used when generating Dx codes based on the results of the exam.
     */
    public DxCode: string;
    /**
     * Identifier as specified by the submitting organization.
     * Typically MRN
     */
    public LocalId: string;
    /**
     * Patient first and last name (required)
     */
    public Name: PersonName;
    /**
     * Date of birth (required). Must be parsable as a full date
     */
    public Dob: string;
    /**
     * Obsolete Gender specification.  Use addGender method
     */
    public Gender: Gender;
    /**
     * Optional patient phone number
     */
    public Phone: string;
    /**
     * Collection of gender declarations
     */
    public Genders: PersonGender[];
    /**
     * Helper method for adding one or more genders
     * @param context
     * @param gender
     */
    public addGender(context: GenderContext, gender: Gender) {
        let nextIndex = this.Genders.length;
        this.Genders[nextIndex] = new PersonGender();
        this.Genders[nextIndex].Context = context;
        this.Genders[nextIndex].Value = gender;
    }
}