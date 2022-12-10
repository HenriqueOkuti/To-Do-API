import {
  createValidTask,
  createInvalidTask,
} from '../factories/create-factory';
import supertest = require('supertest');
import * as httpStatus from 'http-status';
import * as server from '../../src/app';

const app = supertest(server);

beforeAll(() => {});

beforeEach(() => {});

afterAll(() => {});

afterEach(() => {});

describe('POST /task', () => {
  it('If the body is invalid, should return 400 status code', async () => {
    const body = createInvalidTask();
    const response = await app.post('/task').send(body);

    expect(response.status).toEqual(httpStatus.BAD_REQUEST);
  });

  it('If the body is valid, should create a new task and return 201 status code', async () => {
    const body = createValidTask();
    const response = await app.post('/task').send(body);

    expect(response.status).toEqual(httpStatus.CREATED);
    expect(response.body).toEqual({
      created: body,
    });
  });
});