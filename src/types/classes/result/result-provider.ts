import { PersonName } from "../../";

export class ResultProvider {
    public NPI: string;
    public Name: PersonName;
    public Associations?: string;
    public Degrees?: string;
    public Taxonomy?: string;
    public Email: string;

    constructor(
        npi: string,
        name: PersonName,
        email: string,
        associations?: string,
        degrees?: string,
        taxonomy?: string
    ) {
        this.NPI = npi;
        this.Name = name;
        this.Email = email;
        this.Associations = associations;
        this.Degrees = degrees;
        this.Taxonomy = taxonomy;
    }
}
