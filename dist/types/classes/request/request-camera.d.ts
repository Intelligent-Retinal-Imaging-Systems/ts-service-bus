import { RequestImage } from "../../";
export declare class RequestCamera {
    Images: RequestImage[];
    Name: string;
    LocalId: string;
    Location: string;
    IPAddress: string;
    MACAddress: string;
    SerialNumber: string;
    Manufacturer: string;
    Model: string;
    SoftwareVersion: string;
    constructor(images?: RequestImage[], name?: string, localId?: string, location?: string, ipAddress?: string, macAddress?: string, serialNumber?: string, manufacturer?: string, model?: string, softwareVersion?: string);
}
