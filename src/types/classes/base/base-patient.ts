import { PersonName } from '../person-name'; // Ensure you have the correct import path
import { Gender } from '../../enums/gender'; // Ensure you have the correct import path
import { PersonGender } from '../person-gender'; // Ensure you have the correct import path

export class BasePatient {
    public LocalId: string;
    public Name: PersonName;
    public Dob: string;
    public Gender: Gender;
    public Phone: string;
    public Genders: PersonGender[];

    constructor(
        localId: string = '', // Default value
        dob: string = '', // Default value
        gender: Gender = Gender.U, // Assuming 'Unknown' is a valid default value in the Gender enum
        phone: string = '', // Default value
        genders: PersonGender[] = [] // Default to an empty array
    ) {
        this.LocalId = localId;
        this.Name = new PersonName(); // Initialize as a new PersonName object
        this.Dob = dob;
        this.Gender = gender;
        this.Phone = phone;
        this.Genders = genders;
    }
}
