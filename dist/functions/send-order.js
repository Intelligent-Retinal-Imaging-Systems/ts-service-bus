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
exports.SendOrder = SendOrder;
const service_bus_1 = require("@azure/service-bus");
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
