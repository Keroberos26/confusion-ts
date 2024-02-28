const asyncHandler = require('express-async-handler');

const createDish = asyncHandler(async (req, res) => {
  res.status(201).json('CREATE');
});

module.exports = { createDish };
