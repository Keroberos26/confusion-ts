import { NextFunction, Request, Response } from 'express';

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const errorStatus = 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
};

export default error;
