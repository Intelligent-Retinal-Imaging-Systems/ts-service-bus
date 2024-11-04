"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestAzureBlobStorage = void 0;
class RequestAzureBlobStorage {
    constructor(container, fileName) {
        this.Container = "";
        this.FileName = "";
        if (container)
            this.Container = container;
        if (fileName)
            this.FileName = fileName;
    }
}
exports.RequestAzureBlobStorage = RequestAzureBlobStorage;
