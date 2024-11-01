import { BaseCamera } from "./base-camera";
import { RequestSite } from "../request/request-site";
import { RequestImage } from "../request/request-image"; // Ensure RequestImage is imported
import { ImageClass, ImageEncoding } from "../../enums"; // Ensure these enums are imported

abstract class BaseImageRequest {
    public Image: RequestImage; // Will be initialized in the constructor
    public ImageClass: ImageClass | undefined; // Declare property without initial value
    public ImageEncoding: ImageEncoding | undefined; // Declare property without initial value
    public TotalImageCountForOrder: number = 0; // Initialize to a default value
    public ItemNumberInCollection: number = 0; // Initialize to a default value
    public Camera: BaseCamera; // Will be initialized in the constructor
    public ClientGuid: string = ""; // Initialize to an empty string
    public Site: RequestSite; // Will be initialized in the constructor
    public Version: string = ""; // Initialize to an empty string

    constructor() {
        this.Image = new RequestImage(); // Initialize with a new RequestImage instance
        this.Camera = new BaseCamera(); // Initialize with a new BaseCamera instance
        this.Site = new RequestSite(); // Initialize with a new RequestSite instance
    }
}
