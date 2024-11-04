import { Address } from "../../";
/**
 * Structure for IRIS site
 */
export declare class RequestSite {
    /**
     * Optionally supply the name of the site.
     * Typically only supplied when configured for automatic site addition
     */
    Name: string;
    /**
     * If provided for creating a new site, you must include the US State the site resides in
     */
    Address: Address;
    /**
     * Site identifier that is specified by the submitting organization.
     * This identifier must be configured by IRIS if the site was not automatically added.
     * Otherwise contact IRIS support to get the valid site identifiers registered to you
     */
    LocalId: string;
    constructor(name?: string, address?: Address, localId?: string);
}
