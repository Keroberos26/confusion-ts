import { NextFunction, Request, Response } from 'express';

export interface ResponseError extends Error {
  status?: number;
}

const error = (err: ResponseError, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};

export default error;
