/** Callback type for Events */
export type EventsCallbackType = (res: any) => void;
/**
 * Wait for new order events
 * @param cb Callback for new events
 * @param timeoutseconds Timeout in seconds before wait ends. 0 = forever
 * @returns
 */
export declare function WaitEvents(cb: EventsCallbackType, timeoutseconds: number): Promise<void>;
