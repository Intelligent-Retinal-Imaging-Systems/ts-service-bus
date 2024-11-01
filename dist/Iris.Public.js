"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonGender = exports.OrderResult = exports.OrderRequest = exports.RequestSite = exports.RequestPatient = void 0;
exports.SendOrder = SendOrder;
exports.WaitResults = WaitResults;
exports.WaitEvents = WaitEvents;
const service_bus_1 = require("@azure/service-bus");
var Laterality;
(function (Laterality) {
    Laterality[Laterality["OS"] = 0] = "OS";
    Laterality[Laterality["OD"] = 1] = "OD";
})(Laterality || (Laterality = {}));
var MaritalStatus;
(function (MaritalStatus) {
    MaritalStatus[MaritalStatus["A"] = 0] = "A";
    MaritalStatus[MaritalStatus["D"] = 1] = "D";
    MaritalStatus[MaritalStatus["I"] = 2] = "I";
    MaritalStatus[MaritalStatus["L"] = 3] = "L";
    MaritalStatus[MaritalStatus["M"] = 4] = "M";
    MaritalStatus[MaritalStatus["P"] = 5] = "P";
    MaritalStatus[MaritalStatus["S"] = 6] = "S";
    MaritalStatus[MaritalStatus["T"] = 7] = "T";
    MaritalStatus[MaritalStatus["W"] = 8] = "W";
})(MaritalStatus || (MaritalStatus = {}));
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
})(OrderControlCode || (OrderControlCode = {}));
class BaseImage {
}
class BaseOrder {
}
class BasePatient {
    constructor() {
        this.Name = new PersonName();
    }
}
class BaseProvider {
    constructor() {
        this.Name = new PersonName();
    }
}
class BaseSite {
}
class Address {
}
class Note {
}
class PersonName {
}
class BasePublic {
}
class BaseRequest {
    constructor() {
        this.Site = new RequestSite();
    }
}
class BaseResult {
}
class RequestAzureBlobStorage {
}
class RequestCamera {
    constructor() {
        this.Images = [];
        this.Name = "";
        this.LocalId = "";
        this.Location = "";
        this.IPAddress = "";
        this.MACAddress = "";
        this.SerialNumber = "";
        this.Manufacturer = "";
        this.Model = "";
        this.SoftwareVersion = "";
    }
}
class RequestHealthPlan {
    constructor() {
        this.PrimaryCareProvider = new RequestPCP();
    }
}
class RequestImage {
    constructor() {
        this.AzureBlobStorage = new RequestAzureBlobStorage();
    }
}
/**
 * Structure containing order details
 */
class RequestOrder {
    constructor() {
        this.EvaluationTypes = new Array();
        this.EvaluationTypes[0] = EvaluationType.DR;
    }
}
/**
 * Patient details structure
 */
class RequestPatient {
    constructor() {
        this.Genders = new Array();
        this.Address = new Address();
        this.Name = new PersonName();
    }
    /**
     * Helper method for adding one or more genders
     * @param context
     * @param gender
     */
    addGender(context, gender) {
        let nextIndex = this.Genders.length;
        this.Genders[nextIndex] = new PersonGender();
        this.Genders[nextIndex].Context = context;
        this.Genders[nextIndex].Value = gender;
    }
}
exports.RequestPatient = RequestPatient;
class RequestPCP {
    constructor() {
        this.Name = new PersonName();
    }
}
class RequestProvider {
    constructor() {
        this.Name = new PersonName();
    }
}
/**
 * Structure for IRIS site
 */
class RequestSite {
    constructor() {
        this.Address = new Address();
    }
}
exports.RequestSite = RequestSite;
class ResultCameraOperator {
}
class ResultEyeSideGrading {
}
class ResultFinding {
}
class ResultGrading {
}
class ResultHealthPlan {
}
class ResultImage {
}
class ResultImageDetails {
}
class ResultOrder {
}
class ResultPatient {
}
class ResultProvider {
}
class ResultsDocument {
}
class ResultSite {
}
class RequestCameraOperator {
    constructor() {
        this.Name = new PersonName();
    }
}
/**
 * Root class for a new order submission
 */
class OrderRequest {
    constructor(clientGuid) {
        this.Site = new RequestSite();
        this.Patient = new RequestPatient();
        this.Camera = new RequestCamera();
        this.Order = new RequestOrder();
        this.OrderingProvider = new RequestProvider();
        this.ReferringProvider = new RequestProvider();
        this.CameraOperator = new RequestProvider();
        this.HealthPlan = new RequestHealthPlan();
        this.Version = "V2.3.1";
        this.OrderControlCode = OrderControlCode.NW;
        this.ClientGuid = clientGuid;
    }
}
exports.OrderRequest = OrderRequest;
/**
 * Entry point to Results object
 */
class OrderResult {
}
exports.OrderResult = OrderResult;
class BaseImageRequest {
    constructor() {
        this.Image = new RequestImage();
        this.Camera = new BaseCamera();
        this.Site = new RequestSite();
    }
}
class GradingReceipt {
}
class GradingRequest {
}
class ImageReceipt {
}
class ImageRequest {
    constructor() {
        this.Image = new RequestImage();
        this.Camera = new BaseCamera();
        this.Site = new RequestSite();
    }
}
class OrderReceipt {
}
class DiagnosisCode {
}
class PersonGender {
}
exports.PersonGender = PersonGender;
class EvaluationTypeExtensions {
}
class GradingConstants {
}
class ResultObjectType {
}
ResultObjectType.OrderCreationReceipt = `OrderCreationReceipt`;
ResultObjectType.OrderResult = `OrderResult`;
ResultObjectType.ImageReceipt = `ImageReceipt`;
ResultObjectType.GradingReceipt = `GradingReceipt`;
class FindingConstants {
}
FindingConstants.None = `None`;
FindingConstants.Normal = `Normal`;
FindingConstants.Abnormal = `Abnormal`;
FindingConstants.NotGradable = `Not Gradable`;
FindingConstants.DiabeticRetinopathy = `Diabetic Retinopathy`;
FindingConstants.MacularEdema = `Macular Edema`;
FindingConstants.Glaucoma = `Glaucoma`;
FindingConstants.SuspectedVeinOcclusion = `Suspected Vein Occlusion`;
FindingConstants.SuspectedWetAMD = `Suspected Wet AMD`;
FindingConstants.SuspectedHTNRetinopathy = `Suspected HTN Retinopathy`;
FindingConstants.SuspectedEpiretinalMembrane = `Suspected Epiretinal Membrane`;
FindingConstants.SuspectedMacularHole = `Suspected Macular Hole`;
FindingConstants.SuspectedCataract = `Suspected Cataract`;
FindingConstants.SuspectedOtherDisease = `Suspected Other Disease`;
FindingConstants.SuspectedDryAMD = `Suspected Dry AMD`;
FindingConstants.SuspectedGlaucoma = `Suspected Glaucoma`;
FindingConstants.ParacentralDefect = `Paracentral Defect`;
FindingConstants.PeripheralDefect = `Peripheral Defect`;
FindingConstants.SuspectedGeographicAtrophy = `Suspected Geographic Atrophy`;
FindingConstants.FixationError = `Fixation Error`;
FindingConstants.Other = `Other`;
FindingConstants.FalsePositive = `False Positive`;
FindingConstants.FalseNegative = `False Negative`;
FindingConstants.HIVRetinopathy = `HIV Retinopathy`;
FindingConstants.SuspectedDiabeticRetinopathyMildOnly = `Suspected Diabetic Retinopathy - Mild Only`;
FindingConstants.SuspectedDiabeticRetinopathyModeratetoProliferative = `Suspected Diabetic Retinopathy - Moderate to Proliferative`;
FindingConstants.SuspectedMacularEdema = `Suspected Macular Edema`;
FindingConstants.Suspecteddiscedema = `Suspected disc edema`;
FindingConstants.Suspectedbilateralpapilledema = `Suspected bilateral papilledema`;
FindingConstants.DryAMD = `Dry AMD`;
FindingConstants.WetAMD = `Wet AMD`;
class ResultConstants {
}
ResultConstants.AdvAtrophicSubfovealInvolvement = `Adv. Atrophic w/ Subfoveal Involvement`;
ResultConstants.AdvAtrophic = `Adv. Atrophic w/o Subfoveal Involvement`;
ResultConstants.EarlyStage = `Early Stage`;
ResultConstants.FalseNegative = `False Negative`;
ResultConstants.FalsePositive = `False Positive`;
ResultConstants.Indeterminable = `Indeterminable`;
ResultConstants.IntermediateStage = `Intermediate Stage`;
ResultConstants.Mild = `Mild`;
ResultConstants.Moderate = `Moderate`;
ResultConstants.NoObservable = `No Observable`;
ResultConstants.None = `None`;
ResultConstants.NotGradable = `Not Gradable`;
ResultConstants.Positive = `Positive`;
ResultConstants.Proliferative = `Proliferative`;
ResultConstants.Severe = `Severe`;
class UngradableConstants {
}
UngradableConstants.DilationOpportunityMissed = `Dilation Opportunity Missed`;
UngradableConstants.InsufficientViewofOpticNerve = `Insufficient View of Optic Nerve`;
UngradableConstants.DirtyLens = `Dirty Lens`;
UngradableConstants.MediaOpacity = `Media Opacity`;
UngradableConstants.EyelashesOccludingView = `Eyelashes Occluding View`;
UngradableConstants.InsufficientViewofMacula = `Insufficient View of Macula`;
UngradableConstants.NoViewtoRetina = `No View to Retina`;
UngradableConstants.ImageOutofFocus = `Image Out of Focus`;
UngradableConstants.CameraAngleCausingLightShadowPresentBlockingViewofRetina = `Camera Angle Causing Light Shadow Present Blocking View of Retina`;
UngradableConstants.ImagenotofaRetina = `Image not of a Retina`;
/**
 * Send order to IRIS
  * @param order Hydrated order request object to send to IRIS
  */
function SendOrder(order) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = require('./config.json');
        var ordersCxString = config.ServiceBusConnectionStrings.Orders;
        if (ordersCxString == '') {
            console.log(`Must set the connection string for Orders in config.json`);
            return;
        }
        // Wrap in body for service bus queue
        const sbmsg = { body: order };
        // create a Service Bus client using the connection string to the Service Bus namespace
        const serviceBusClient = new service_bus_1.ServiceBusClient(ordersCxString);
        // createSender() can also be used to create a sender for a topic.
        const serviceBusSender = serviceBusClient.createSender("orders");
        try {
            yield serviceBusSender.sendMessages(sbmsg);
            console.log(`Sent order to queue: ${"orders"}`);
            // Close the sender
            yield serviceBusSender.close();
        }
        finally {
            yield serviceBusClient.close();
        }
    });
}
/**
 * Wait for results to be published
 * @param timeoutseconds Number of seconds before wait quits. 0 = forever
 */
function WaitResults(cb, timeoutseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = require('./config.json');
        if (config.ServiceBusConnectionStrings.Results == '') {
            console.log(`Must set the connection string for Results in config.json`);
            return;
        }
        const sbClient = new service_bus_1.ServiceBusClient(config.ServiceBusConnectionStrings.Results);
        const receiver = sbClient.createReceiver("results");
        try {
            const subscription = receiver.subscribe({
                // After executing this callback you provide, the receiver will remove the message from the queue if you
                // have not already settled the message in your callback.
                // You can disable this by passing `false` to the `autoCompleteMessages` option in the `subscribe()` method.
                // If your callback _does_ throw an error before the message is settled, then it will be abandoned.
                processMessage: (brokeredMessage) => __awaiter(this, void 0, void 0, function* () {
                    var res = brokeredMessage.body;
                    console.log(`Received message on results queue`);
                    cb(res);
                }),
                // This callback will be called for any error that occurs when either in the receiver when receiving the message
                // or when executing your `processMessage` callback or when the receiver automatically completes or abandons the message.
                processError: (args) => __awaiter(this, void 0, void 0, function* () {
                    console.log(`Error from source ${args.errorSource} occurred: `, args.error);
                    // the `subscribe() call will not stop trying to receive messages without explicit intervention from you.
                    if ((0, service_bus_1.isServiceBusError)(args.error)) {
                        switch (args.error.code) {
                            case "MessagingEntityDisabled":
                            case "MessagingEntityNotFound":
                            case "UnauthorizedAccess":
                                // It's possible you have a temporary infrastructure change (for instance, the entity being
                                // temporarily disabled). The handler will continue to retry if `close()` is not called on the subscription - it is completely up to you
                                // what is considered fatal for your program.
                                console.log(`An unrecoverable error occurred. Stopping processing. ${args.error.code}`, args.error);
                                yield subscription.close();
                                break;
                            case "MessageLockLost":
                                console.log(`Message lock lost for message`, args.error);
                                break;
                            case "ServiceBusy":
                                // choosing an arbitrary amount of time to wait.
                                yield (0, service_bus_1.delay)(1000);
                                break;
                        }
                    }
                }),
            });
            if (timeoutseconds > 0)
                yield (0, service_bus_1.delay)(timeoutseconds * 1000);
            else {
                while (1)
                    ;
            }
            console.log(`End wait for results...`);
            yield receiver.close();
        }
        finally {
            yield sbClient.close();
        }
    });
}
/**
 * Wait for new order events
 * @param cb Callback for new events
 * @param timeoutseconds Timeout in seconds before wait ends. 0 = forever
 * @returns
 */
function WaitEvents(cb, timeoutseconds) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = require('./config.json');
        if (config.ServiceBusConnectionStrings.Events == '') {
            console.log(`Must set the connection string for Results in config.json`);
            return;
        }
        const sbClient = new service_bus_1.ServiceBusClient(config.ServiceBusConnectionStrings.Events);
        const receiver = sbClient.createReceiver("events");
        try {
            const subscription = receiver.subscribe({
                // After executing this callback you provide, the receiver will remove the message from the queue if you
                // have not already settled the message in your callback.
                // You can disable this by passing `false` to the `autoCompleteMessages` option in the `subscribe()` method.
                // If your callback _does_ throw an error before the message is settled, then it will be abandoned.
                processMessage: (brokeredMessage) => __awaiter(this, void 0, void 0, function* () {
                    var res = brokeredMessage.body;
                    console.log(`Received message on events queue`);
                    cb(res);
                }),
                // This callback will be called for any error that occurs when either in the receiver when receiving the message
                // or when executing your `processMessage` callback or when the receiver automatically completes or abandons the message.
                processError: (args) => __awaiter(this, void 0, void 0, function* () {
                    console.log(`Error from source ${args.errorSource} occurred: `, args.error);
                    // the `subscribe() call will not stop trying to receive messages without explicit intervention from you.
                    if ((0, service_bus_1.isServiceBusError)(args.error)) {
                        switch (args.error.code) {
                            case "MessagingEntityDisabled":
                            case "MessagingEntityNotFound":
                            case "UnauthorizedAccess":
                                // It's possible you have a temporary infrastructure change (for instance, the entity being
                                // temporarily disabled). The handler will continue to retry if `close()` is not called on the subscription - it is completely up to you
                                // what is considered fatal for your program.
                                console.log(`An unrecoverable error occurred. Stopping processing. ${args.error.code}`, args.error);
                                yield subscription.close();
                                break;
                            case "MessageLockLost":
                                console.log(`Message lock lost for message`, args.error);
                                break;
                            case "ServiceBusy":
                                // choosing an arbitrary amount of time to wait.
                                yield (0, service_bus_1.delay)(1000);
                                break;
                        }
                    }
                }),
            });
            if (timeoutseconds > 0)
                yield (0, service_bus_1.delay)(timeoutseconds * 1000);
            else {
                while (1)
                    ;
            }
            console.log(`End wait for order events...`);
            yield receiver.close();
        }
        finally {
            yield sbClient.close();
        }
    });
}
