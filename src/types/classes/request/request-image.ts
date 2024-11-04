import {Laterality, ImageContext, RequestAzureBlobStorage} from "../../";

export class RequestImage {
    public LocalId: string = "";
    public Taken: any; // Consider specifying a more precise type if possible
    public GroupId: number = 0; // Assuming 0 is a default value
    public GroupOrdinal: number = 0; // Assuming 0 is a default value
    public AzureBlobStorage: RequestAzureBlobStorage = new RequestAzureBlobStorage();
    public Laterality: Laterality | undefined; // Mark as optional
    public ImageContext: ImageContext | undefined; // Mark as optional
    public ParentLocalId: string = "";

    constructor(
        localId?: string,
        taken?: any,
        groupId?: number,
        groupOrdinal?: number,
        azureBlobStorage?: RequestAzureBlobStorage,
        laterality?: Laterality,
        imageContext?: ImageContext,
        parentLocalId?: string
    ) {
        if (localId) this.LocalId = localId;
        if (taken) this.Taken = taken;
        if (groupId !== undefined) this.GroupId = groupId; // Allow 0 as a valid value
        if (groupOrdinal !== undefined) this.GroupOrdinal = groupOrdinal; // Allow 0 as a valid value
        if (azureBlobStorage) this.AzureBlobStorage = azureBlobStorage;
        if (laterality) this.Laterality = laterality;
        if (imageContext) this.ImageContext = imageContext;
        if (parentLocalId) this.ParentLocalId = parentLocalId;
    }
}
