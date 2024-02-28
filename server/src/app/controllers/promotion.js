const asyncHandler = require('express-async-handler');
const Promotion = require('../models/Promotion');

const createPromotion = asyncHandler(async (req, res) => {
  const newPromotion = await Promotion.create(req.body);
  res.status(201).json(newPromotion);
});

const updatePromotion = asyncHandler(async (req, res) => {
  const promotion = await Promotion.findByIdAndUpdate(req.params.promotionId, { $set: req.body }, { new: true });
  res.status(201).json(promotion);
});

const deletePromotion = asyncHandler(async (req, res) => {
  const promotion = await Promotion.findByIdAndDelete(req.params.promotionId);
  res.status(200).json(promotion);
});

const getPromotion = asyncHandler(async (req, res) => {
  const promotion = await Promotion.findById(req.params.promotionId);
  res.status(200).json(promotion);
});

const getPromotions = asyncHandler(async (req, res) => {
  const promotions = await Promotion.find();
  res.status(200).json(promotions);
});

module.exports = {
  createPromotion,
  updatePromotion,
  deletePromotion,
  getPromotion,
  getPromotions,
};
