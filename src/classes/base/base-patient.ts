import {PersonGender} from "../Iris.Public";

class BasePatient
{
    constructor() {
        this.Name = new PersonName();
    }

    public LocalId: string;
    public Name: PersonName;
    public Dob: string;
    public Gender: Gender;
    public Phone: string;
    public Genders: PersonGender[];
}