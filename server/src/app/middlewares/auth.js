const asyncHandler = require('express-async-handler');
const { createError } = require('../../utils/createError');

const authBasic = asyncHandler(async (req, res, next) => {
  if (!req.session.user) {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw createError(401, 'You are not authenticated!');

    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];
    if (username === 'admin' && password === 'password') {
      req.session.user = username;
      next();
    } else throw createError(401, 'Wrong credentials!');
  } else {
    if (req.session.user === 'admin') {
      console.log(req.session);
      next();
    } else throw createError(401, 'You are not authenticated');
  }
});

module.exports = { authBasic };
