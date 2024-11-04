import { OrderRequest } from "../types";
/**
 * Send order to IRIS
 * @param order Hydrated order request object to send to IRIS
 */
export declare function SendOrder(order: OrderRequest): Promise<void>;
