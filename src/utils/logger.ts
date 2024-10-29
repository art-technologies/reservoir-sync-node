import pino from 'pino'

const logLevel = process.env.LOG_LEVEL || "info";
const pretty = process.env.LOG_PRETTY != "false" ?? true;

export function createLogger(name?: string) {
    return pino({
        level: logLevel,
        name: name,
        serializers: {
            e: pino.stdSerializers.err,
            err: pino.stdSerializers.err,
            error: pino.stdSerializers.err
        },
        transport: pretty ? {
            target: 'pino-pretty',
            options: {
                colorize: true
            }
        } : undefined
    });
}

export const defaultLogger = createLogger("default")
