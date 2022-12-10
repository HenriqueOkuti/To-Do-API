import * as schema from '../schemas/taskSchema';
import * as service from '../services/index';
import { Request, Response } from 'express';
import httpStatus = require('http-status');

export function createTask(req: Request, res: Response) {
  const newTask = req.body as schema.task;
  try {
    const insertedTask = service.createTask(newTask);
    return res.status(httpStatus.CREATED).send(insertedTask);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export function getTask(req: Request, res: Response) {
  try {
    const tasks = service.findTasks();
    return res.status(httpStatus.OK).send(tasks);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
