import { BaseCamera, Laterality, ImageContext } from "../../";

export class ResultImage {
    public OrderImageID: number;
    public Camera: BaseCamera;
    public FileName: string;
    public Received: Date;  // Use Date type for timestamps
    public ContainerName: string;
    public LocalId: string;
    public Taken: Date;  // Use Date type for timestamps
    public GroupId: number;
    public GroupOrdinal: number;
    public Laterality: Laterality;
    public ImageContext: ImageContext;
    public ParentLocalId?: string;  // Make optional if it might not always be set

    constructor(
        orderImageID: number,
        camera: BaseCamera,
        fileName: string,
        received: Date,
        containerName: string,
        localId: string,
        taken: Date,
        groupId: number,
        groupOrdinal: number,
        laterality: Laterality,
        imageContext: ImageContext,
        parentLocalId?: string
    ) {
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
        this.ParentLocalId = parentLocalId;  // Default to null if not provided
    }
}
