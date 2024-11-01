/** Object for IRIS service bus operations configuration */
import { IRISServiceBusConnectionStrings } from "./iris-service-bus-connection-strings";

export interface Config {
    ClientGuid: string,
    ServiceBusConnectionStrings: IRISServiceBusConnectionStrings
}