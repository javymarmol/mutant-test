const { TestScheduler } = require('jest');
const request = require('supertest');
const app = require('../app');

describe('testing our server', () => {
  it('should response GET method', async () => {
    expect.assertions(1);
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should return validation possitive, code 200', async () => {
    expect.assertions(1);
    try {
      const response = await request(app).post('/mutant')
        .set({ 'Content-Type': 'application/json' })
        .send({ "dna":["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"] });
      expect(response.statusCode).toBe(200);
    } catch (e) {
      console.log('error', e);
    }
  });

  it('should return validation negative, code 403', async () => {
    expect.assertions(1);
    try {
      const response = await request(app).post('/mutant')
        .set({ 'Content-Type': 'application/json' })
        .send({ "dna":["ATGCGA","CTGTGC","TTATGT","AGAAAG","CCCGTA","TCACTG"] });
      expect(response.statusCode).toBe(403);
    } catch (e) {
      console.log('error', e);
      // process.exit(1);
    }
  });

  it('should return middleware validation negative, code 400', async () => {
    expect.assertions(1);
    try {
      const response = await request(app).post('/mutant')
        .set({ 'Content-Type': 'application/json' })
        .send({ "dna":["ATGBGA","CTGTGC","TTATGT","AGAAAG","CCCGTA","TCACTG"] });
      expect(response.statusCode).toBe(400);
    } catch (e) {
      console.log('error', e);
      // process.exit(1);
    }
  });
});
