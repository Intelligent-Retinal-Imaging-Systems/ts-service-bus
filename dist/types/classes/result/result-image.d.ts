import { BaseCamera, Laterality, ImageContext } from "../../";
export declare class ResultImage {
    OrderImageID: number;
    Camera: BaseCamera;
    FileName: string;
    Received: Date;
    ContainerName: string;
    LocalId: string;
    Taken: Date;
    GroupId: number;
    GroupOrdinal: number;
    Laterality: Laterality;
    ImageContext: ImageContext;
    ParentLocalId?: string;
    constructor(orderImageID: number, camera: BaseCamera, fileName: string, received: Date, containerName: string, localId: string, taken: Date, groupId: number, groupOrdinal: number, laterality: Laterality, imageContext: ImageContext, parentLocalId?: string);
}
