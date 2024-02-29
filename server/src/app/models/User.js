const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
