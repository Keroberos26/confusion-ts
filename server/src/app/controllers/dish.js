const asyncHandler = require('express-async-handler');
const Dish = require('../models/Dish');

const createDish = asyncHandler(async (req, res) => {
  const newDish = await Dish.create(req.body);
  res.status(201).json(newDish);
});

const updateDish = asyncHandler(async (req, res) => {
  const dish = await Dish.findByIdAndUpdate(req.params.dishId, { $set: req.body }, { new: true });
  res.status(201).json(dish);
});

const deleteDish = asyncHandler(async (req, res) => {
  const dish = await Dish.findByIdAndDelete(req.params.dishId);
  res.status(200).json(dish);
});

const getDish = asyncHandler(async (req, res) => {
  const dish = await Dish.findById(req.params.dishId);
  res.status(200).json(dish);
});

const getDishes = asyncHandler(async (req, res) => {
  const dishes = await Dish.find();
  res.status(200).json(dishes);
});

const writeComment = asyncHandler(async (req, res) => {
  await Dish.findByIdAndUpdate(req.params.dishId, { $push: { comments: req.body } });
  res.status(200).json(req.body);
});

const getComments = asyncHandler(async (req, res) => {
  const dish = await Dish.findById(req.params.dishId);
  res.status(200).json(dish.comments);
});

module.exports = { createDish, updateDish, deleteDish, getDish, getDishes, writeComment, getComments };
