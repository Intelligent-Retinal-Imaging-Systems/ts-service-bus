class RequestCameraOperator {
    public NPI: string = "";
    public Name: PersonName = new PersonName();
    public Associations: string = "";
    public Degrees: string = "";
    public Taxonomy: string = "";
    public Email: string = "";

    constructor(
        npi?: string,
        name?: PersonName,
        associations?: string,
        degrees?: string,
        taxonomy?: string,
        email?: string
    ) {
        if (npi) this.NPI = npi;
        if (name) this.Name = name;
        if (associations) this.Associations = associations;
        if (degrees) this.Degrees = degrees;
        if (taxonomy) this.Taxonomy = taxonomy;
        if (email) this.Email = email;
    }
}
