import { PersonName, Gender, PersonGender } from '../../';
export declare class BasePatient {
    LocalId: string;
    Name: PersonName;
    Dob: string;
    Gender: Gender;
    Phone: string;
    Genders: PersonGender[];
    constructor(localId?: string, // Default value
    dob?: string, // Default value
    gender?: Gender, // Assuming 'Unknown' is a valid default value in the Gender enum
    phone?: string, // Default value
    genders?: PersonGender[]);
}
