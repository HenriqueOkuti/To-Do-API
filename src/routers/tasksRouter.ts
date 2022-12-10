import * as mid from '../middlewares/index';
import { Router } from 'express';
import httpStatus = require('http-status');
import * as contr from '../controllers/index';

const taskRouter = Router();

taskRouter
  .post('', mid.validateRequest, contr.createTask)
  .get('', contr.getTask)
  .delete('', mid.validateRequest, contr.deleteTask);

export { taskRouter };
