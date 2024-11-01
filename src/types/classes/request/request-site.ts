/**
 * Structure for IRIS site
 */
export class RequestSite {
    /**
     * Optionally supply the name of the site.
     * Typically only supplied when configured for automatic site addition
     */
    public Name: string = "";

    /**
     * If provided for creating a new site, you must include the US State the site resides in
     */
    public Address: Address = new Address();

    /**
     * Site identifier that is specified by the submitting organization.
     * This identifier must be configured by IRIS if the site was not automatically added.
     * Otherwise contact IRIS support to get the valid site identifiers registered to you
     */
    public LocalId: string = "";

    constructor(name?: string, address?: Address, localId?: string) {
        if (name) this.Name = name;
        if (address) this.Address = address;
        if (localId) this.LocalId = localId;
    }
}
