"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCamera {
    constructor(name, localId, location, ipAddress, macAddress, serialNumber, manufacturer, model, softwareVersion) {
        this.Name = "";
        this.LocalId = "";
        this.Location = "";
        this.IPAddress = "";
        this.MACAddress = "";
        this.SerialNumber = "";
        this.Manufacturer = "";
        this.Model = "";
        this.SoftwareVersion = "";
        if (name)
            this.Name = name;
        if (localId)
            this.LocalId = localId;
        if (location)
            this.Location = location;
        if (ipAddress)
            this.IPAddress = ipAddress;
        if (macAddress)
            this.MACAddress = macAddress;
        if (serialNumber)
            this.SerialNumber = serialNumber;
        if (manufacturer)
            this.Manufacturer = manufacturer;
        if (model)
            this.Model = model;
        if (softwareVersion)
            this.SoftwareVersion = softwareVersion;
    }
}
exports.default = BaseCamera;
