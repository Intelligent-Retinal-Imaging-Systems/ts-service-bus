import { PersonName } from '../person-name'; // Ensure correct import path

export abstract class BaseProvider {
    public NPI: string;
    public Name: PersonName;
    public Associations: string;
    public Degrees: string;
    public Taxonomy: string;
    public Email: string;

    constructor(
        npi: string = '', // Default value
        associations: string = '', // Default value
        degrees: string = '', // Default value
        taxonomy: string = '', // Default value
        email: string = '' // Default value
    ) {
        this.NPI = npi;
        this.Name = new PersonName(); // Initialize as a new PersonName object
        this.Associations = associations;
        this.Degrees = degrees;
        this.Taxonomy = taxonomy;
        this.Email = email;
    }
}
