import { NextFunction, Request, Response } from 'express';
import { ErrorCode } from '@common/errors-handler/error-codes';
import { ErrorModel } from '@models/error.model';
import { ErrorException } from '@common/exceptions/error-exception-handler';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('Error handling middleware called.');
  console.log('Path:', req.path);
  console.error('Error occurred:', err);
  if (err instanceof ErrorException) {
    console.log('Error is known.');
    res.status(err.status).send(err);
  } else {
    // For unhandled errors.
    res.status(500).send({ code: ErrorCode.UnknownError, status: 500 } as ErrorModel);
  }
};
