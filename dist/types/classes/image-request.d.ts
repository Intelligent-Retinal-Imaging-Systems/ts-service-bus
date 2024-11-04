import { RequestImage, BaseCamera, RequestSite, ImageClass, ImageEncoding } from "../";
export declare class ImageRequest {
    OrderLocalId: string;
    Image: RequestImage;
    ImageClass: ImageClass | undefined;
    ImageEncoding: ImageEncoding | undefined;
    TotalImageCountForOrder: number;
    ItemNumberInCollection: number;
    Camera: BaseCamera;
    ClientGuid: string;
    Site: RequestSite;
    Version: string;
    constructor(orderLocalId?: string, imageClass?: ImageClass, imageEncoding?: ImageEncoding, totalImageCountForOrder?: number, itemNumberInCollection?: number, clientGuid?: string, version?: string);
}
