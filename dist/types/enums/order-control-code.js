"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderControlCode = void 0;
var OrderControlCode;
(function (OrderControlCode) {
    OrderControlCode[OrderControlCode["Unknown"] = 0] = "Unknown";
    OrderControlCode[OrderControlCode["NW"] = 1] = "NW";
    OrderControlCode[OrderControlCode["XO"] = 2] = "XO";
    OrderControlCode[OrderControlCode["XR"] = 3] = "XR";
    OrderControlCode[OrderControlCode["CA"] = 4] = "CA";
    OrderControlCode[OrderControlCode["CR"] = 5] = "CR";
    OrderControlCode[OrderControlCode["CloneOrder"] = 6] = "CloneOrder";
    OrderControlCode[OrderControlCode["ChangeEvaluationType"] = 7] = "ChangeEvaluationType";
    OrderControlCode[OrderControlCode["OC"] = 8] = "OC";
    OrderControlCode[OrderControlCode["Submission"] = 9] = "Submission";
    OrderControlCode[OrderControlCode["SC"] = 10] = "SC";
    OrderControlCode[OrderControlCode["ResendResult"] = 11] = "ResendResult";
})(OrderControlCode || (exports.OrderControlCode = OrderControlCode = {}));
