/* eslint-disable @typescript-eslint/ban-ts-comment */
import {connect, JetStreamManager, JetStreamClient} from "nats";
import SyncNode from "../SyncNode";
import {
    AsksSchema,
    BidsSchema,
    DataSets,
    DataTypes,
    SalesSchema,
    TransfersSchema,
} from "../types";
import {getPbChain} from "../utils";
import { QueueService } from "./QueueService";
import {reservoir} from "../pb/reservoir";
import {defaultLogger} from "../utils/logger";
/**
 *
 *
 * The _InsertionService class provides an interface to the Prisma ORM.
 * This service handles database connections, data upserts, and record counting.
 */
class _NatsInsertionService {

    public insertionTally: Record<DataTypes | string, number> = {};

    private natsJs: JetStreamClient | null = null;

    /**
     * Initiates the connection to the database through Prisma.
     * @returns {Promise<void>}
     */
    public async launch(): Promise<void> {
        const nc = await connect({ servers: `${process.env.NATS_URL}` });

        const jsm: JetStreamManager = await nc.jetstreamManager();
        // Ensure a stream exists
        await jsm.streams.add({ name: "reservoir-asks", subjects: ["reservoir.asks.*.*"], num_replicas: 3 });
        await jsm.streams.add({ name: "reservoir-bids", subjects: ["reservoir.bids.*.*"], num_replicas: 3 });
        await jsm.streams.add({ name: "reservoir-sales", subjects: ["reservoir.sales.*.*"], num_replicas: 3 });
        await jsm.streams.add({ name: "reservoir-transfers", subjects: ["reservoir.transfers.*.*"], num_replicas: 3 });
        // Create a JetStream client
        this.natsJs = nc.jetstream();

        defaultLogger.info(`insertion service launched`);
    }

    /**`
     * Inserts new data or updates existing data in the database.
     * @param {DataTypes} type - Type of the data to be upserted.
     * @param {DataSets} data - The actual data to be upserted.
     * @returns {Promise<void>}
     */
    public async upsert(type: DataTypes, data: DataSets): Promise<void> {
        data = this._filter(type, data);
        const chain = getPbChain();

        for await (const record of data) {
            try {
                switch (type) {
                    case "asks": {
                        const ask = record as AsksSchema;
                        // defaultLogger.info({type, data: ask}, "publishing ask to nats")
                        const askPb = reservoir.Ask.create({
                            ...ask,
                            id: ask?.id,
                            chain: chain,
                        })
                        const messageBuffer = reservoir.Ask.encode(askPb).finish()
                        await this.natsJs?.publish(`reservoir.${type}.${askPb.contract.toLowerCase()}.${askPb.id}`, messageBuffer);
                        break;
                    }
                    case "bids": {
                        const bid = record as BidsSchema;
                        // defaultLogger.info({type, data: bid}, "publishing bid to nats")
                        const bidPb = reservoir.Bid.create({
                            ...bid,
                            id: bid?.id,
                            chain: chain,
                        })
                        const messageBuffer = reservoir.Bid.encode(bidPb).finish()
                        await this.natsJs?.publish(`reservoir.${type}.${bidPb.contract.toLowerCase()}.${bidPb.id}`, messageBuffer);
                        break;
                    }
                    case "sales": {
                        const sale = record as SalesSchema;
                        // defaultLogger.info({type, data: sale}, "publishing sale to nats")
                        const salePb = reservoir.Sale.create({
                            ...sale,
                            id: `${sale.txHash}-${sale.logIndex}-${sale.batchIndex}`,
                            chain: chain,
                        })
                        const messageBuffer = reservoir.Sale.encode(salePb).finish()
                        if (salePb.token == null || salePb.token.contract == null) {
                            continue
                        }
                        await this.natsJs?.publish(`reservoir.${type}.${salePb.token.contract.toLowerCase()}.${salePb.id}`, messageBuffer);
                        break;
                    }
                    case "transfers": {
                        const transfer = record as TransfersSchema;
                        // defaultLogger.info({type, data: transfer}, "publishing transfer to nats")
                        const transferPb = reservoir.Transfer.create({
                            ...transfer,
                            id: `${transfer.txHash}-${transfer.logIndex}-${transfer.batchIndex}`,
                            chain: chain,
                        })
                        const messageBuffer = reservoir.Transfer.encode(transferPb).finish()
                        if (transferPb.token == null || transferPb.token.contract == null) {
                            continue
                        }
                        await this.natsJs?.publish(`reservoir.${type}.${transferPb.token.contract.toLowerCase()}.${transferPb.id}`, messageBuffer);
                        break;
                    }
                    default:
                        defaultLogger.error({type}, 'NatsInsertionService: unknown type')
                }
            } catch (e) {
                defaultLogger.error({e, type, record}, 'failed to upsert into nats')
            }
        }
    }

    /**
     * Filters the input data based on the available contracts.
     * @param {DataTypes} type - The type of the data ('asks', 'bids', 'sales').
     * @param {AsksSchema[] | SalesSchema[] | BidsSchema[]} data - The input data.
     * @returns {AsksSchema[] | SalesSchema[] | BidsSchema[]} - The filtered data.
     * @private
     */
    private _filter(type: DataTypes, data: DataSets): DataSets {
        const contracts = QueueService.contracts[type].map((c) => c.toLowerCase());
        const sources = SyncNode.getConfigProperty("syncer")["sources"].map((s) =>
            s.toLowerCase()
        );

        switch (type) {
            case "transfers":
                return (data as TransfersSchema[]).filter((set) =>
                    contracts.includes(set?.token?.contract?.toLowerCase())
                );
            case "asks":
                return (data as AsksSchema[]).filter((set) => {
                    return (
                        (contracts.includes(set?.contract?.toLowerCase())) &&
                        (sources.length === 0 ||
                            sources.includes(set?.source?.domain.toLowerCase()))
                    );
                });
            case "bids":
                return (data as BidsSchema[]).filter((set) => {
                    return (
                        (contracts.includes(set?.contract?.toLowerCase())) &&
                        (sources.length === 0 ||
                            sources.includes(set?.source?.domain.toLowerCase()))
                    );
                });
            case "sales":
                return (data as SalesSchema[]).filter(
                    (set) =>
                        (contracts.includes(set?.token?.contract?.toLowerCase())) &&
                        (sources.length === 0 || sources.includes(set?.orderSource))
                );
            default:
                return data;
        }
    }
}

/**
 * The InsertionService is an instance of the _InsertionService class,
 * allowing for singleton-like usage throughout the application.
 */
export const NatsInsertionService = _NatsInsertionService;
