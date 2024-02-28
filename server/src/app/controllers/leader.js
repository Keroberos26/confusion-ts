const asyncHandler = require('express-async-handler');
const Leader = require('../models/Leader');

const createLeader = asyncHandler(async (req, res) => {
  const newLeader = await Leader.create(req.body);
  res.status(201).json(newLeader);
});

const updateLeader = asyncHandler(async (req, res) => {
  const leader = await Leader.findByIdAndUpdate(req.params.leaderId, { $set: req.body }, { new: true });
  res.status(201).json(leader);
});

const deleteLeader = asyncHandler(async (req, res) => {
  const leader = await Leader.findByIdAndDelete(req.params.leaderId);
  res.status(200).json(leader);
});

const getLeader = asyncHandler(async (req, res) => {
  const leader = await Leader.findById(req.params.leaderId);
  res.status(200).json(leader);
});

const getLeaders = asyncHandler(async (req, res) => {
  const leaders = await Leader.find();
  res.status(200).json(leaders);
});

module.exports = {
  createLeader,
  updateLeader,
  deleteLeader,
  getLeader,
  getLeaders,
};
