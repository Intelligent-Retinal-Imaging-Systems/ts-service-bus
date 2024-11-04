import {Note, PersonName} from "../../";

export class ResultCameraOperator {
    public Name: PersonName;
    public Notes: Note[] = [];
    public UserName: string;

    constructor(name: PersonName, userName: string) {
        this.Name = name;
        this.UserName = userName;
    }
}