import {Config} from "../interfaces";
import {OrderRequest} from "../classes";
import {ServiceBusClient, ServiceBusSender} from "@azure/service-bus";
/**
 * Send order to IRIS
 * @param order Hydrated order request object to send to IRIS
 */
export async function SendOrder( order: OrderRequest) {

    let config: Config = require('./config.json');

    var ordersCxString = config.ServiceBusConnectionStrings.Orders;

    if (ordersCxString == '') {
        console.log(`Must set the connection string for Orders in config.json`);
        return;
    }


    // Wrap in body for service bus queue
    const sbmsg = { body: order };

    // create a Service Bus client using the connection string to the Service Bus namespace
    const serviceBusClient = new ServiceBusClient(ordersCxString);

    // createSender() can also be used to create a sender for a topic.
    const serviceBusSender: ServiceBusSender = serviceBusClient.createSender("orders");

    try {

        await serviceBusSender.sendMessages(sbmsg);
        console.log(`Sent order to queue: ${"orders"}`);

        // Close the sender
        await serviceBusSender.close();
    } finally {
        await serviceBusClient.close();
    }
}