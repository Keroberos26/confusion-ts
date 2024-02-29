const asyncHandler = require('express-async-handler');
const { createError } = require('../../utils/createError');

const authBasic = asyncHandler(async (req, res, next) => {
  console.log(req.session);

  if (!req.session.user) {
    throw createError(403, 'You are not authenticated!');
  } else {
    if (req.session.user === 'authenticated') {
      next();
    } else {
      throw createError(403, 'You are not authenticated!');
    }
  }
});

module.exports = { authBasic };
