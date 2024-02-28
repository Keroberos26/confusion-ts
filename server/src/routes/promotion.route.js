const { Router } = require('express');
const {
  createPromotion,
  updatePromotion,
  deletePromotion,
  getPromotion,
  getPromotions,
} = require('../app/controllers/promotion');

const router = Router();

router.post('/', createPromotion);
router.put('/:promotionId', updatePromotion);
router.delete('/:promotionId', deletePromotion);
router.get('/:promotionId', getPromotion);
router.get('/', getPromotions);

module.exports = router;
