const mongoose = require('mongoose');

const Leader = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    feature: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
      maxLength: 3,
    },
    designation: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Leader', Leader);
