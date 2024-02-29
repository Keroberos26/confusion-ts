const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const { createError } = require('../../utils/createError');
const passport = require('passport');

const login = asyncHandler(async (req, res) => {
  res.status(200).json({ success: true, status: 'You are successfully logged in!' });
});

const signup = asyncHandler(async (req, res) => {
  const user = await User.register(new User({ username: req.body.username }), req.body.password);
  passport.authenticate('local')(req, res, () => {
    res.status(200).json(user);
  });
});

const logout = asyncHandler(async (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.json('Success');
  } else throw createError(403, 'You are not logged in!');
});

module.exports = { login, logout, signup };
