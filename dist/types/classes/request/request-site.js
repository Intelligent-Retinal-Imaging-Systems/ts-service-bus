"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSite = void 0;
const __1 = require("../../");
/**
 * Structure for IRIS site
 */
class RequestSite {
    constructor(name, address, localId) {
        /**
         * Optionally supply the name of the site.
         * Typically only supplied when configured for automatic site addition
         */
        this.Name = "";
        /**
         * If provided for creating a new site, you must include the US State the site resides in
         */
        this.Address = new __1.Address();
        /**
         * Site identifier that is specified by the submitting organization.
         * This identifier must be configured by IRIS if the site was not automatically added.
         * Otherwise contact IRIS support to get the valid site identifiers registered to you
         */
        this.LocalId = "";
        if (name)
            this.Name = name;
        if (address)
            this.Address = address;
        if (localId)
            this.LocalId = localId;
    }
}
exports.RequestSite = RequestSite;
