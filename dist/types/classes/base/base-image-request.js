"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../../");
class BaseImageRequest {
    constructor() {
        this.TotalImageCountForOrder = 0; // Initialize to a default value
        this.ItemNumberInCollection = 0; // Initialize to a default value
        this.ClientGuid = ""; // Initialize to an empty string
        this.Version = ""; // Initialize to an empty string
        this.Image = new __1.RequestImage(); // Initialize with a new RequestImage instance
        this.Camera = new __1.BaseCamera(); // Initialize with a new BaseCamera instance
        this.Site = new __1.RequestSite(); // Initialize with a new RequestSite instance
    }
}
