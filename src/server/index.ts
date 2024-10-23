import "dotenv/config";
import { stdin, stdout } from "node:process";
import { Server } from "./Server";
import {defaultLogger} from "../utils/logger";

stdin.pipe(stdout);
process.title = "SyncNode Server Process";

const config = {
  port: Number(process.env.PORT) as number,
  authorization: process.env.AUTHORIZATION as string,
};

Server.construct(config);
Server.launch();

process.on("uncaughtException", (error: Error) => {
  defaultLogger.error({error, pid: process.pid}, 'fatal error, terimnating server process')
  process.exit(0);
});

process.on("unhandledRejection", (error: Error) => {
  defaultLogger.error({error, pid: process.pid}, 'fatal error, terimnating server process')
  process.exit(0);
});
