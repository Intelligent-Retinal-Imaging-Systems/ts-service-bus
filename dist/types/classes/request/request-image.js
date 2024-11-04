"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestImage = void 0;
const __1 = require("../../");
class RequestImage {
    constructor(localId, taken, groupId, groupOrdinal, azureBlobStorage, laterality, imageContext, parentLocalId) {
        this.LocalId = "";
        this.GroupId = 0; // Assuming 0 is a default value
        this.GroupOrdinal = 0; // Assuming 0 is a default value
        this.AzureBlobStorage = new __1.RequestAzureBlobStorage();
        this.ParentLocalId = "";
        if (localId)
            this.LocalId = localId;
        if (taken)
            this.Taken = taken;
        if (groupId !== undefined)
            this.GroupId = groupId; // Allow 0 as a valid value
        if (groupOrdinal !== undefined)
            this.GroupOrdinal = groupOrdinal; // Allow 0 as a valid value
        if (azureBlobStorage)
            this.AzureBlobStorage = azureBlobStorage;
        if (laterality)
            this.Laterality = laterality;
        if (imageContext)
            this.ImageContext = imageContext;
        if (parentLocalId)
            this.ParentLocalId = parentLocalId;
    }
}
exports.RequestImage = RequestImage;
