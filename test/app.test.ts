import request from 'supertest';
import { describe, expect, it } from 'vitest';
process.env.DATABASE_URL =
  process.env.DATABASE_URL ?? 'postgresql://localhost:5432/erms_nala?schema=public';
import app from '../src/app';

describe('API', () => {
  it('GET /health returns 200', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
  });

  it('GET /api/v1 returns expected response shape', async () => {
    const response = await request(app).get('/api/v1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: 'Erms-NALA API',
      version: 'v1'
    });
  });

  it('POST /api/v1/users invalid payload returns 400', async () => {
    const response = await request(app)
      .post('/api/v1/users')
      .send({
        email: 'invalid-email'
      });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Validation Error');
    expect(Array.isArray(response.body.details)).toBe(true);
  });
});
