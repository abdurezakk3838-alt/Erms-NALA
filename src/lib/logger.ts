import pino from 'pino';
import pinoHttp from 'pino-http';
import { randomUUID } from 'node:crypto';

const level = process.env.LOG_LEVEL ?? (process.env.NODE_ENV === 'production' ? 'info' : 'debug');

export const logger = pino({
  level,
  base: undefined
});

export const httpLogger = pinoHttp({
  logger,
  genReqId: (req, res) => {
    const headerRequestId = req.headers['x-request-id'];
    const requestId = typeof headerRequestId === 'string' && headerRequestId.trim() ? headerRequestId : randomUUID();

    res.setHeader('x-request-id', requestId);
    return requestId;
  },
  customLogLevel: (_req, res, err) => {
    if (err || res.statusCode >= 500) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
  autoLogging: process.env.NODE_ENV !== 'test'
});
