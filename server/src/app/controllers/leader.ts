import { NextFunction, Request, Response } from 'express';

export const createLeader = (req: Request, res: Response, next: NextFunction) => {
  res.json('CREATE');
};

export const updateLeader = (req: Request, res: Response, next: NextFunction) => {
  res.json('UPDATE');
};

export const deleteLeader = (req: Request, res: Response, next: NextFunction) => {
  res.json('DELETE');
};

export const getLeaders = (req: Request, res: Response, next: NextFunction) => {
  res.json('GET ALL');
};

export const getLeader = (req: Request, res: Response, next: NextFunction) => {
  res.json('GET');
};
