export class Address {
    public Street1: string = "";  // Initialize to an empty string
    public Street2: string = "";  // Initialize to an empty string
    public City: string = "";      // Initialize to an empty string
    public State: string = "";     // Initialize to an empty string
    public Zip: string = "";       // Initialize to an empty string
    public PostalCode: string = ""; // Initialize to an empty string
    public Region: string = "";    // Initialize to an empty string
    public Province: string = "";   // Initialize to an empty string
    public Territory: string = "";   // Initialize to an empty string
    public Country: string = "";    // Initialize to an empty string

    constructor(
        street1?: string,
        street2?: string,
        city?: string,
        state?: string,
        zip?: string,
        postalCode?: string,
        region?: string,
        province?: string,
        territory?: string,
        country?: string
    ) {
        this.Street1 = street1 || this.Street1;  // Use provided value or default
        this.Street2 = street2 || this.Street2;  // Use provided value or default
        this.City = city || this.City;            // Use provided value or default
        this.State = state || this.State;         // Use provided value or default
        this.Zip = zip || this.Zip;               // Use provided value or default
        this.PostalCode = postalCode || this.PostalCode; // Use provided value or default
        this.Region = region || this.Region;      // Use provided value or default
        this.Province = province || this.Province; // Use provided value or default
        this.Territory = territory || this.Territory; // Use provided value or default
        this.Country = country || this.Country;   // Use provided value or default
    }
}
