const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../app/models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const getToken = function (user) {
  return jwt.sign(user, 'omk', { expiresIn: 3600 });
};

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'omk',
};

const jwtPassport = passport.use(
  new JwtStrategy(
    opts,
    asyncHandler(async (payload, done) => {
      console.log(payload);
      const user = await User.findById(payload._id);
      if (user) done(null, user);
    }),
  ),
);

const verifyUser = passport.authenticate('jwt', { session: false });

module.exports = { getToken, jwtPassport, verifyUser };
