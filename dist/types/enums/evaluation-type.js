"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationType = void 0;
var EvaluationType;
(function (EvaluationType) {
    EvaluationType[EvaluationType["Unknown"] = 0] = "Unknown";
    EvaluationType[EvaluationType["DR"] = 1] = "DR";
    EvaluationType[EvaluationType["Glaucoma"] = 2] = "Glaucoma";
    EvaluationType[EvaluationType["HIV"] = 3] = "HIV";
    EvaluationType[EvaluationType["DR_REFNOREF"] = 6] = "DR_REFNOREF";
    EvaluationType[EvaluationType["AMD"] = 7] = "AMD";
    EvaluationType[EvaluationType["DR_AMD"] = 8] = "DR_AMD";
})(EvaluationType || (exports.EvaluationType = EvaluationType = {}));
