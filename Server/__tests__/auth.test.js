import request from 'supertest';
import app from '../index.js'; // hoặc file export app

describe('Auth API', () => {
  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
