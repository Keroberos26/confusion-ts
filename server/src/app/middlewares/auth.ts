import { NextFunction, Request, Response } from 'express';
import { ResponseError } from './error';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!req.signedCookies.user) {
    if (!authHeader) {
      const err: ResponseError = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      next(err);
      return;
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];

    if (username === 'admin' && password === 'password') {
      res.cookie('user', 'admin', { signed: true, httpOnly: true });
      next();
    } else {
      const err: ResponseError = new Error('Wrong credentials');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      next(err);
      return;
    }
  } else {
    if (req.signedCookies.user === 'admin') {
      next();
    } else {
      var err: ResponseError = new Error('You are not authenticated!!');
      err.status = 401;
      next(err);
    }
  }
};

export default auth;
