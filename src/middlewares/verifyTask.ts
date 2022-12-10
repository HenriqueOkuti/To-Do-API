import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import httpStatus = require('http-status');

const taskBody = Joi.object({
  task: Joi.string().required(),
});

export function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isValid = taskBody.validate(req.body);
  if (isValid.error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
  next();
}
