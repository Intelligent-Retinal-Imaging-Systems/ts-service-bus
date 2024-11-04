"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageContext = void 0;
var ImageContext;
(function (ImageContext) {
    ImageContext[ImageContext["Primary"] = 0] = "Primary";
    ImageContext[ImageContext["Secondary"] = 1] = "Secondary";
    ImageContext[ImageContext["Unknown"] = 2] = "Unknown";
    ImageContext[ImageContext["Component"] = 3] = "Component";
    ImageContext[ImageContext["Aggregate"] = 4] = "Aggregate";
    ImageContext[ImageContext["Enhancement"] = 5] = "Enhancement";
    ImageContext[ImageContext["AddedLate"] = 6] = "AddedLate";
})(ImageContext || (exports.ImageContext = ImageContext = {}));
