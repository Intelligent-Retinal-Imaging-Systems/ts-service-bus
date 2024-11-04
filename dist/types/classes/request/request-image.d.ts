import { Laterality, ImageContext, RequestAzureBlobStorage } from "../../";
export declare class RequestImage {
    LocalId: string;
    Taken: any;
    GroupId: number;
    GroupOrdinal: number;
    AzureBlobStorage: RequestAzureBlobStorage;
    Laterality: Laterality | undefined;
    ImageContext: ImageContext | undefined;
    ParentLocalId: string;
    constructor(localId?: string, taken?: any, groupId?: number, groupOrdinal?: number, azureBlobStorage?: RequestAzureBlobStorage, laterality?: Laterality, imageContext?: ImageContext, parentLocalId?: string);
}
