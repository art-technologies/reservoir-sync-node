/* eslint-disable @typescript-eslint/ban-ts-comment */
import {NatsInsertionService} from "./NatsInsertionService";

/**
 * The InsertionService is an instance of the _InsertionService class,
 * allowing for singleton-like usage throughout the application.
 */
export const InsertionService = new NatsInsertionService();
