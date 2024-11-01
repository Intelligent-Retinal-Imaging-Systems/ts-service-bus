export class BaseCamera {
    public Name: string = "";
    public LocalId: string = "";
    public Location: string = "";
    public IPAddress: string = "";
    public MACAddress: string = "";
    public SerialNumber: string = "";
    public Manufacturer: string = "";
    public Model: string = "";
    public SoftwareVersion: string = "";

    constructor(
        name?: string,
        localId?: string,
        location?: string,
        ipAddress?: string,
        macAddress?: string,
        serialNumber?: string,
        manufacturer?: string,
        model?: string,
        softwareVersion?: string
    ) {
        if (name) this.Name = name;
        if (localId) this.LocalId = localId;
        if (location) this.Location = location;
        if (ipAddress) this.IPAddress = ipAddress;
        if (macAddress) this.MACAddress = macAddress;
        if (serialNumber) this.SerialNumber = serialNumber;
        if (manufacturer) this.Manufacturer = manufacturer;
        if (model) this.Model = model;
        if (softwareVersion) this.SoftwareVersion = softwareVersion;
    }
}