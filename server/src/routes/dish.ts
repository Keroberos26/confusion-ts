import express, { Request, Response, Router } from 'express';
import { createDish, deleteDish, getDish, getDishes, updateDish } from '../app/controllers/dish';
import auth from '../app/middlewares/auth';

const router = Router();

router.post('/', createDish);
router.put('/:dishId', updateDish);
router.delete('/:dishId', deleteDish);
router.get('/:dishId', getDish);
router.get('/', auth, getDishes);

export default router;
