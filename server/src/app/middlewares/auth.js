const asyncHandler = require('express-async-handler');
const { createError } = require('../../utils/createError');

const authBasic = asyncHandler(async (req, res, next) => {
  if (!req.signedCookies.user) {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw createError(401, 'You are not authenticated!');

    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];
    if (username === 'admin' && password === 'password') {
      res.cookie('user', username, { signed: true });
      next();
    } else throw createError(401, 'Wrong credentials!');
  } else {
    if (req.signedCookies.user === 'admin') {
      next();
    } else throw createError(401, 'You are not authenticated');
  }
});

module.exports = { authBasic };
