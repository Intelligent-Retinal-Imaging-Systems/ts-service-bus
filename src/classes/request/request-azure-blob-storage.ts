class RequestAzureBlobStorage {
    public Container: string = "";
    public FileName: string = "";

    constructor(container?: string, fileName?: string) {
        if (container) this.Container = container;
        if (fileName) this.FileName = fileName;
    }
}
