"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultImage = void 0;
class ResultImage {
    constructor(orderImageID, camera, fileName, received, containerName, localId, taken, groupId, groupOrdinal, laterality, imageContext, parentLocalId) {
        this.OrderImageID = orderImageID;
        this.Camera = camera;
        this.FileName = fileName;
        this.Received = received;
        this.ContainerName = containerName;
        this.LocalId = localId;
        this.Taken = taken;
        this.GroupId = groupId;
        this.GroupOrdinal = groupOrdinal;
        this.Laterality = laterality;
        this.ImageContext = imageContext;
        this.ParentLocalId = parentLocalId; // Default to null if not provided
    }
}
exports.ResultImage = ResultImage;
