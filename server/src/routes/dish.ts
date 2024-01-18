import express, { Request, Response, Router } from 'express';
import { createDish, deleteDish, getDish, getDishes, updateDish } from '../app/controllers/dish';

const router = Router();

router.post('/', createDish);
router.put('/:dishId', updateDish);
router.delete('/:dishId', deleteDish);
router.get('/:dishId', getDish);
router.get('/', getDishes);

export default router;
