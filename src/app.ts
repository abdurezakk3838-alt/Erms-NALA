import express, { NextFunction, Request, Response } from 'express';
import healthRouter from './routes/health';

const app = express();

app.use(express.json());

app.use('/health', healthRouter);

app.get('/api/v1', (_req, res) => {
  res.status(200).json({
    name: 'Erms-NALA API',
    version: 'v1'
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

export default app;
