import { RequestImage } from "./request/request-image";
import { BaseCamera } from "./base/base-camera";
import { RequestSite } from "./request/request-site";
import { ImageClass } from "../enums/image-class";
import { ImageEncoding } from "../enums/image-encoding";

export class ImageRequest {
    public OrderLocalId: string = ""; // Initialize to an empty string
    public Image: RequestImage;
    public ImageClass: ImageClass | undefined; // Use appropriate initialization in constructor
    public ImageEncoding: ImageEncoding | undefined; // Use appropriate initialization in constructor
    public TotalImageCountForOrder: number = 0; // Initialize to 0
    public ItemNumberInCollection: number = 0; // Initialize to 0
    public Camera: BaseCamera;
    public ClientGuid: string = ""; // Initialize to an empty string
    public Site: RequestSite;
    public Version: string = ""; // Initialize to an empty string

    constructor(
        orderLocalId?: string,
        imageClass?: ImageClass,
        imageEncoding?: ImageEncoding,
        totalImageCountForOrder?: number,
        itemNumberInCollection?: number,
        clientGuid?: string,
        version?: string
    ) {
        this.Image = new RequestImage(); // Initialize with a new instance of RequestImage
        this.Camera = new BaseCamera(); // Initialize with a new instance of BaseCamera
        this.Site = new RequestSite(); // Initialize with a new instance of RequestSite

        this.OrderLocalId = orderLocalId || this.OrderLocalId; // Use provided value or default
        this.ImageClass = imageClass; // Directly assign; may be undefined
        this.ImageEncoding = imageEncoding; // Directly assign; may be undefined
        this.TotalImageCountForOrder = totalImageCountForOrder || this.TotalImageCountForOrder; // Use provided value or default
        this.ItemNumberInCollection = itemNumberInCollection || this.ItemNumberInCollection; // Use provided value or default
        this.ClientGuid = clientGuid || this.ClientGuid; // Use provided value or default
        this.Version = version || this.Version; // Use provided value or default
    }
}
