import { Request, Response, Router } from 'express';
import {
  createPromotion,
  deletePromotion,
  getPromotion,
  getPromotions,
  updatePromotion,
} from '../app/controllers/promotion';

const router = Router();

router.post('/', createPromotion);
router.put('/:promoId', updatePromotion);
router.delete('/:promoId', deletePromotion);
router.get('/:promoId', getPromotion);
router.get('/', getPromotions);

export default router;
