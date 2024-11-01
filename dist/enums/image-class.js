"use strict";
var ImageClass;
(function (ImageClass) {
    ImageClass[ImageClass["Fundus"] = 0] = "Fundus";
    ImageClass[ImageClass["CT"] = 1] = "CT";
    ImageClass[ImageClass["MRI"] = 2] = "MRI";
    ImageClass[ImageClass["Ultrasound"] = 3] = "Ultrasound";
    ImageClass[ImageClass["XRay"] = 4] = "XRay";
    ImageClass[ImageClass["VRx"] = 5] = "VRx";
    ImageClass[ImageClass["OCT"] = 6] = "OCT";
    ImageClass[ImageClass["VisualFields"] = 7] = "VisualFields";
})(ImageClass || (ImageClass = {}));
