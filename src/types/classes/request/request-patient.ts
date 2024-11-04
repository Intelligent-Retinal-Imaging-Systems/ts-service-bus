import { Gender, GenderContext, PersonGender, Address, PersonName, MaritalStatus } from "../../";

/**
 * Patient details structure
 */
export class RequestPatient {
    /**
     * Optional race
     */
    public Race?: string;

    /**
     * Optional ethnicity
     */
    public Ethnicity?: string;

    /**
     * Optional language
     */
    public PrimaryLanguage?: string;

    /**
     * Optional patient marital status
     */
    public MaritalStatus?: MaritalStatus;

    /**
     * Optional patient email address
     */
    public Email?: string;

    /**
     * Optional additional info specific to the patient. Typically encoded in JSON
     */
    public AdditionalInfo?: string;

    /**
     * Optional home address of the patient
     */
    public Address: Address = new Address();

    /**
     * ICD-10 Diagnosis supporting the procedure. Typically the foundation code
     * used when generating Dx codes based on the results of the exam.
     */
    public DxCode?: string;

    /**
     * Identifier as specified by the submitting organization. Typically MRN
     */
    public LocalId?: string;

    /**
     * Patient's first and last name (required)
     */
    public Name: PersonName = new PersonName();

    /**
     * Date of birth (required). Should be a full date
     */
    public Dob?: string;

    /**
     * Obsolete Gender specification. Use addGender method
     */
    public Gender?: Gender;

    /**
     * Optional patient phone number
     */
    public Phone?: string;

    /**
     * Collection of gender declarations
     */
    public Genders: PersonGender[] = [];

    constructor() {
        this.Genders = new Array<PersonGender>();
        this.Address = new Address();
        this.Name = new PersonName();
    }

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
