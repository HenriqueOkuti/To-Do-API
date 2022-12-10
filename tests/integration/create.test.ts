import {
  createValidTask,
  createInvalidTask,
} from '../factories/create-factory';
import supertest = require('supertest');
import * as httpStatus from 'http-status';
import server from '../../src/app';
import { cleanAllTasks } from '../../src/repositories';

const app = supertest(server);

beforeAll(() => {});

beforeEach(() => {
  cleanAllTasks();
});

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

describe('GET /task', () => {
  it('Should return all tasks and return 200 status code', async () => {
    const body = createValidTask();
    await app.post('/task').send(body);

    const response = await app.get('/task');

    expect(response.status).toEqual(httpStatus.OK);
    expect(response.body).toEqual([body]);
  });
});
