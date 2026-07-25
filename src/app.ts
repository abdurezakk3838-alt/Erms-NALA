import express, { NextFunction, Request, Response } from 'express';
import healthRouter from './routes/health';
import usersRouter from './modules/users/users.routes';
import { httpLogger } from './lib/logger';

const app = express();

app.use(httpLogger);
app.use(express.json());

app.use('/health', healthRouter);

app.get('/api/v1', (_req, res) => {
  res.status(200).json({
    name: 'Erms-NALA API',
    version: 'v1'
  });
});

app.use('/api/v1/users', usersRouter);

app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.message === 'User with this email already exists' ? 409 : 500;

  res.status(status).json({
    error: status === 409 ? 'Conflict' : 'Internal Server Error',
    message: err.message
  });
});

export default app;
