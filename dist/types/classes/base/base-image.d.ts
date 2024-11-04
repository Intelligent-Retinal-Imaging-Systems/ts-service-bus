import { ImageContext, Laterality } from "../../";
export declare abstract class BaseImage {
    LocalId: string;
    Taken: any;
    GroupId: number;
    GroupOrdinal: number;
    Laterality: Laterality;
    ImageContext: ImageContext;
    ParentLocalId: string;
    constructor(localId: string, taken: any, // Consider a more precise type
    groupId: number, groupOrdinal: number, laterality: Laterality, imageContext: ImageContext, parentLocalId: string);
}
