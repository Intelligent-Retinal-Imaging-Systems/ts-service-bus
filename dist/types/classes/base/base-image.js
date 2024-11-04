"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseImage = void 0;
class BaseImage {
    constructor(localId, taken, // Consider a more precise type
    groupId, groupOrdinal, laterality, imageContext, parentLocalId) {
        this.LocalId = localId; // Initialize with the provided localId
        this.Taken = taken; // Initialize with the provided taken value
        this.GroupId = groupId; // Initialize with the provided groupId
        this.GroupOrdinal = groupOrdinal; // Initialize with the provided groupOrdinal
        this.Laterality = laterality; // Initialize with the provided laterality
        this.ImageContext = imageContext; // Initialize with the provided imageContext
        this.ParentLocalId = parentLocalId; // Initialize with the provided parentLocalId
    }
}
exports.BaseImage = BaseImage;
