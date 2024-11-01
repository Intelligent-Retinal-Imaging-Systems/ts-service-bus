export abstract class BaseImage {
    public LocalId: string; // Declare property without initial value
    public Taken: any; // Consider specifying a more precise type if possible
    public GroupId: number; // Declare property without initial value
    public GroupOrdinal: number; // Declare property without initial value
    public Laterality: Laterality; // Declare property without initial value
    public ImageContext: ImageContext; // Declare property without initial value
    public ParentLocalId: string; // Declare property without initial value

    constructor(
        localId: string,
        taken: any, // Consider a more precise type
        groupId: number,
        groupOrdinal: number,
        laterality: Laterality,
        imageContext: ImageContext,
        parentLocalId: string
    ) {
        this.LocalId = localId; // Initialize with the provided localId
        this.Taken = taken; // Initialize with the provided taken value
        this.GroupId = groupId; // Initialize with the provided groupId
        this.GroupOrdinal = groupOrdinal; // Initialize with the provided groupOrdinal
        this.Laterality = laterality; // Initialize with the provided laterality
        this.ImageContext = imageContext; // Initialize with the provided imageContext
        this.ParentLocalId = parentLocalId; // Initialize with the provided parentLocalId
    }
}
