import { Server } from 'node:http';
import app from './app';
import { env } from './config/env';
import { logger } from './lib/logger';
import { prisma } from './lib/prisma';

const startServer = async (): Promise<Server> => {
  return new Promise((resolve, reject) => {
    const server = app.listen(env.port, () => {
      logger.info({ port: env.port }, 'Server listening');
      resolve(server);
    });

    server.on('error', reject);
  });
};

const registerShutdownHandlers = (server: Server): void => {
  let shuttingDown = false;

  const shutdown = async (signal: NodeJS.Signals): Promise<void> => {
    if (shuttingDown) {
      return;
    }

    shuttingDown = true;
    logger.info({ signal }, 'Graceful shutdown started');

    server.close(async (serverError) => {
      if (serverError) {
        logger.error({ err: serverError }, 'HTTP server close failed');
      }

      try {
        await prisma.$disconnect();
        logger.info('Prisma disconnected');
      } catch (prismaError) {
        logger.error({ err: prismaError }, 'Prisma disconnect failed');
      }

      process.exit(serverError ? 1 : 0);
    });
  };

  process.on('SIGINT', () => {
    void shutdown('SIGINT');
  });

  process.on('SIGTERM', () => {
    void shutdown('SIGTERM');
  });
};

void (async () => {
  try {
    const server = await startServer();
    registerShutdownHandlers(server);
  } catch (error) {
    logger.error({ err: error }, 'Failed to start server');
    await prisma.$disconnect();
    process.exit(1);
  }
})();
