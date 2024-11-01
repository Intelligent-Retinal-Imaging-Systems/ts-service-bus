import { PersonGender } from "../person-gender";
import { PersonName } from "../person-name";
import { Gender } from "../../enums";

export class ResultPatient {
    public PatientId: number;
    public LocalId: string = ""; // Initialize to an empty string
    public Name: PersonName; // Will be initialized in the constructor
    public Dob: string = ""; // Initialize to an empty string
    public Gender: Gender; // Will be initialized in the constructor
    public Phone: string = ""; // Initialize to an empty string
    public Genders: PersonGender[] = []; // Initialize to an empty array

    constructor(
        patientId: number,
        name: PersonName,
        dob: string,
        gender: Gender,
        phone: string,
        genders: PersonGender[] = []
    ) {
        this.PatientId = patientId; // Initialize with the provided PatientId
        this.Name = name; // Initialize with the provided PersonName instance
        this.Dob = dob; // Initialize with the provided date of birth
        this.Gender = gender; // Initialize with the provided Gender
        this.Phone = phone; // Initialize with the provided phone number
        this.Genders = genders; // Initialize with the provided array of PersonGender
    }
}
