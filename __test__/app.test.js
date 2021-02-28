const { TestScheduler } = require('jest');
const request = require('supertest');
const app = require('../app');

describe('testing our server', () => {
  it('should response GET method', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return validation possitive', async () => {
    expect.assertions(1);
    try {
      const response = await request(app).post('/mutant')
        .send({ dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'] });
      expect(response.statusCode).toBe(200);
    } catch (e) {
      console.log('error', e);
      process.exit(1);
    }
  });

  it('should return validation negative', async () => {
    expect.assertions(1);
    try {
      const response = await request(app).post('/mutant')
        .send({ dna: ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'] });
      expect(response.statusCode).toBe(200);
    } catch (e) {
      console.log('error', e);
      process.exit(1);
    }
  });
});
