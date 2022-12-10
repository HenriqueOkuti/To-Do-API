import * as mid from '../middlewares/index';
import { Router } from 'express';
import httpStatus = require('http-status');
import * as contr from '../controllers/index';

const taskRouter = Router();

taskRouter
  .post('', mid.validateRequest, contr.createTask)
  .get('', (req, res) => {
    res.sendStatus(httpStatus.OK);
  });

export { taskRouter };
