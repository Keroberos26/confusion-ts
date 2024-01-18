import { NextFunction, Request, Response } from 'express';
import Promotion from '../models/Promotion';

export const createPromotion = (req: Request, res: Response, next: NextFunction) => {
  const newPromotion = new Promotion(req.body);
  newPromotion
    .save()
    .then((promotion) => res.status(200).json(promotion))
    .catch((err) => next(err));
};

export const updatePromotion = (req: Request, res: Response, next: NextFunction) => {
  Promotion.findByIdAndUpdate(req.params.promoId, req.body, { new: true })
    .then((promotion) => res.status(200).json(promotion))
    .catch((err) => next(err));
};

export const deletePromotion = (req: Request, res: Response, next: NextFunction) => {
  Promotion.findByIdAndDelete(req.params.promoId)
    .then((promotion) => res.status(200).json(promotion))
    .catch((err) => next(err));
};

export const getPromotions = (req: Request, res: Response, next: NextFunction) => {
  Promotion.find()
    .then((promotions) => res.status(200).json(promotions))
    .catch((err) => next(err));
};

export const getPromotion = (req: Request, res: Response, next: NextFunction) => {
  Promotion.findById(req.params.promoId)
    .then((promotion) => res.status(200).json(promotion))
    .catch((err) => next(err));
};
