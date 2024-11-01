class RequestProvider {
    public NPI?: string; // Optional property
    public Name: PersonName; // Must be provided
    public Associations?: string; // Optional property
    public Degrees?: string; // Optional property
    public Taxonomy?: string; // Optional property
    public Email?: string; // Optional property

    constructor(name: PersonName, npi?: string, associations?: string, degrees?: string, taxonomy?: string, email?: string) {
        this.Name = name; // Must be provided
        this.NPI = npi; // Set if provided
        this.Associations = associations; // Set if provided
        this.Degrees = degrees; // Set if provided
        this.Taxonomy = taxonomy; // Set if provided
        this.Email = email; // Set if provided
    }
}
