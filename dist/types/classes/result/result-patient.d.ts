import { PersonGender, PersonName, Gender } from "../../";
export declare class ResultPatient {
    PatientId: number;
    LocalId: string;
    Name: PersonName;
    Dob: string;
    Gender: Gender;
    Phone: string;
    Genders: PersonGender[];
    constructor(patientId: number, name: PersonName, dob: string, gender: Gender, phone: string, genders?: PersonGender[]);
}
