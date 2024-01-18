import { NextFunction, Request, Response } from 'express';

export const createPromotion = (req: Request, res: Response, next: NextFunction) => {
  res.json('CREATE');
};

export const updatePromotion = (req: Request, res: Response, next: NextFunction) => {
  res.json('UPDATE');
};

export const deletePromotion = (req: Request, res: Response, next: NextFunction) => {
  res.json('DELETE');
};

export const getPromotions = (req: Request, res: Response, next: NextFunction) => {
  res.json('GET ALL');
};

export const getPromotion = (req: Request, res: Response, next: NextFunction) => {
  res.json('GET');
};
