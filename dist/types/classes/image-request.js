"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageRequest = void 0;
const __1 = require("../");
class ImageRequest {
    constructor(orderLocalId, imageClass, imageEncoding, totalImageCountForOrder, itemNumberInCollection, clientGuid, version) {
        this.OrderLocalId = ""; // Initialize to an empty string
        this.TotalImageCountForOrder = 0; // Initialize to 0
        this.ItemNumberInCollection = 0; // Initialize to 0
        this.ClientGuid = ""; // Initialize to an empty string
        this.Version = ""; // Initialize to an empty string
        this.Image = new __1.RequestImage(); // Initialize with a new instance of RequestImage
        this.Camera = new __1.BaseCamera(); // Initialize with a new instance of BaseCamera
        this.Site = new __1.RequestSite(); // Initialize with a new instance of RequestSite
        this.OrderLocalId = orderLocalId || this.OrderLocalId; // Use provided value or default
        this.ImageClass = imageClass; // Directly assign; may be undefined
        this.ImageEncoding = imageEncoding; // Directly assign; may be undefined
        this.TotalImageCountForOrder = totalImageCountForOrder || this.TotalImageCountForOrder; // Use provided value or default
        this.ItemNumberInCollection = itemNumberInCollection || this.ItemNumberInCollection; // Use provided value or default
        this.ClientGuid = clientGuid || this.ClientGuid; // Use provided value or default
        this.Version = version || this.Version; // Use provided value or default
    }
}
exports.ImageRequest = ImageRequest;
