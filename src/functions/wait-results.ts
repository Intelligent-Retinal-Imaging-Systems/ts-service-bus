import {OrderResult} from "../classes";
import {Config} from "../interfaces";
import {
    delay,
    isServiceBusError,
    ProcessErrorArgs,
    ServiceBusClient,
    ServiceBusReceivedMessage
} from "@azure/service-bus";

/** Callback type for Results */
export type ResultsCallbackType = (res: OrderResult) => void;

/**
 * Wait for results to be published
 * @param timeoutseconds Number of seconds before wait quits. 0 = forever
 */
export async function WaitResults(cb: ResultsCallbackType, timeoutseconds: number) {
    let config: Config = require('./config.json');

    if (config.ServiceBusConnectionStrings.Results == '') {
        console.log(`Must set the connection string for Results in config.json`);
        return;
    }

    const sbClient = new ServiceBusClient(config.ServiceBusConnectionStrings.Results);
    const receiver = sbClient.createReceiver("results");

    try {
        const subscription = receiver.subscribe({
            // After executing this callback you provide, the receiver will remove the message from the queue if you
            // have not already settled the message in your callback.
            // You can disable this by passing `false` to the `autoCompleteMessages` option in the `subscribe()` method.
            // If your callback _does_ throw an error before the message is settled, then it will be abandoned.
            processMessage: async (brokeredMessage: ServiceBusReceivedMessage) => {
                var res:OrderResult = brokeredMessage.body;
                console.log(`Received message on results queue`);
                cb(res);

            },
            // This callback will be called for any error that occurs when either in the receiver when receiving the message
            // or when executing your `processMessage` callback or when the receiver automatically completes or abandons the message.
            processError: async (args: ProcessErrorArgs) => {
                console.log(`Error from source ${args.errorSource} occurred: `, args.error);

                // the `subscribe() call will not stop trying to receive messages without explicit intervention from you.
                if (isServiceBusError(args.error)) {
                    switch (args.error.code) {
                        case "MessagingEntityDisabled":
                        case "MessagingEntityNotFound":
                        case "UnauthorizedAccess":
                            // It's possible you have a temporary infrastructure change (for instance, the entity being
                            // temporarily disabled). The handler will continue to retry if `close()` is not called on the subscription - it is completely up to you
                            // what is considered fatal for your program.
                            console.log(
                                `An unrecoverable error occurred. Stopping processing. ${args.error.code}`,
                                args.error,
                            );
                            await subscription.close();
                            break;
                        case "MessageLockLost":
                            console.log(`Message lock lost for message`, args.error);
                            break;
                        case "ServiceBusy":
                            // choosing an arbitrary amount of time to wait.
                            await delay(1000);
                            break;
                    }
                }
            },
        });

        if (timeoutseconds > 0)
            await delay(timeoutseconds * 1000);
        else
        {
            while(1);
        }

        console.log(`End wait for results...`);
        await receiver.close();
    } finally {
        await sbClient.close();
    }

}