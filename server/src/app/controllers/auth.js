const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { createError } = require('../../utils/createError');

const login = asyncHandler(async (req, res) => {
  if (!req.session.user) {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw createError(401, 'You are not authenticated');

    const auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];

    const user = await User.findOne({ username: username });
    if (!user) throw createError(403, `Username ${username} does not exist!`);
    if (user.password !== password) throw createError(403, 'Your password is incorrect!');

    req.session.user = 'authenticated';
    res.status(200).json(user);
  }
});

const signup = asyncHandler(async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) throw createError(403, `Username ${req.body.username} already exists!`);
  const newUser = await User.create(req.body);
  res.status(200).json({ status: 'Registration Successful!', user: newUser });
});

const logout = asyncHandler(async (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.json('Success');
  } else throw createError(403, 'You are not logged in!');
});

module.exports = { login, logout, signup };
