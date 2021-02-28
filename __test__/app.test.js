const { TestScheduler } = require('jest');
const request = require('supertest');
const app = require('../app');

describe('testing our server', () => {
    test('should response GET method', done => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});