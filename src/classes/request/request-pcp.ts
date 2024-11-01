class RequestPCP {
    public Name: PersonName; // Declare property without initial value
    public NPI?: string; // Optional property
    public EmailAddress?: string; // Optional property
    public FaxNumber?: string; // Optional property

    constructor(name?: PersonName, npi?: string, emailAddress?: string, faxNumber?: string) {
        this.Name = name || new PersonName(); // Initialize with the provided name or a new instance of PersonName
        this.NPI = npi; // Set the NPI if provided
        this.EmailAddress = emailAddress; // Set the EmailAddress if provided
        this.FaxNumber = faxNumber; // Set the FaxNumber if provided
    }
}