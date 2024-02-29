const asyncHandler = require('express-async-handler');
const { createError } = require('../../utils/createError');

const authBasic = asyncHandler(async (req, res, next) => {
  if (!req.user) throw createError(403, 'You are not authenticated!');
  next();
});

module.exports = { authBasic };
