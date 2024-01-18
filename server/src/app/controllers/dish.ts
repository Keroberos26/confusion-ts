import { NextFunction, Request, Response } from 'express';
import Dish from '../models/Dish';

export const createDish = (req: Request, res: Response, next: NextFunction) => {
  const newDish = new Dish(req.body);

  // try {
  //   const dish = newDish.save();
  //   res.status(200).json(dish);
  // } catch (error) {
  //   next(error);
  // }

  newDish
    .save()
    .then((dish) => res.status(200).json(dish))
    .catch((err) => next(err));
};

export const updateDish = (req: Request, res: Response, next: NextFunction) => {
  Dish.findByIdAndUpdate(req.params.dishId, { $set: req.body }, { new: true })
    .then((dish) => res.status(200).json(dish))
    .catch((err) => next(err));
};

export const deleteDish = (req: Request, res: Response, next: NextFunction) => {
  Dish.findByIdAndDelete(req.params.dishId)
    .then((dish) => res.status(200).json(dish))
    .catch((err) => next(err));
};

export const getDishes = (req: Request, res: Response, next: NextFunction) => {
  Dish.find()
    .then((dishes) => res.status(200).json(dishes))
    .catch((err) => next(err));
};

export const getDish = (req: Request, res: Response, next: NextFunction) => {
  Dish.findById(req.params.dishId)
    .then((dish) => res.status(200).json(dish))
    .catch((err) => next(err));
};
