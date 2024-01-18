import { NextFunction, Request, Response } from 'express';
import Leader from '../models/Leader';

export const createLeader = (req: Request, res: Response, next: NextFunction) => {
  const newLeader = new Leader(req.body);
  newLeader
    .save()
    .then((leader) => res.status(200).json(leader))
    .catch((err) => next(err));
};

export const updateLeader = (req: Request, res: Response, next: NextFunction) => {
  Leader.findByIdAndUpdate(req.params.leaderId, req.body, { new: true })
    .then((leader) => res.status(200).json(leader))
    .catch((err) => next(err));
};

export const deleteLeader = (req: Request, res: Response, next: NextFunction) => {
  Leader.findByIdAndDelete(req.params.leaderId)
    .then((leader) => res.status(200).json(leader))
    .catch((err) => next(err));
};

export const getLeaders = (req: Request, res: Response, next: NextFunction) => {
  Leader.find()
    .then((leaders) => res.status(200).json(leaders))
    .catch((err) => next(err));
};

export const getLeader = (req: Request, res: Response, next: NextFunction) => {
  Leader.findById(req.params.leaderId)
    .then((leader) => res.status(200).json(leader))
    .catch((err) => next(err));
};
