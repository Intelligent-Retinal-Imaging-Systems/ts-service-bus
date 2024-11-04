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
exports.WaitEvents = WaitEvents;
const service_bus_1 = require("@azure/service-bus");
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
