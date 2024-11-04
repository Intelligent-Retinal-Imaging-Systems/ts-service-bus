import { OrderResult } from "../types";
/** Callback type for Results */
export type ResultsCallbackType = (res: OrderResult) => void;
/**
 * Wait for results to be published
 * @param timeoutseconds Number of seconds before wait quits. 0 = forever
 */
export declare function WaitResults(cb: ResultsCallbackType, timeoutseconds: number): Promise<void>;
