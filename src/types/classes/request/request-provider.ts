import {PersonName} from "../../";

export class RequestProvider {
    public NPI?: string;
    public Name: PersonName;
    public Associations?: string;
    public Degrees?: string;
    public Taxonomy?: string;
    public Email?: string;

    constructor() {
        this.Name = new PersonName();
    }
}
