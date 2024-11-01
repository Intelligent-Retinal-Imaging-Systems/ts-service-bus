abstract class BaseProvider
{
    constructor() {
        this.Name = new PersonName();
    }

    public NPI: string;
    public Name: PersonName;
    public Associations: string;
    public Degrees: string;
    public Taxonomy: string;
    public Email: string;
}