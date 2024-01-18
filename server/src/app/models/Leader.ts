import { Schema, model } from 'mongoose';

const Leader = new Schema(
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
    designation: {
      type: String,
      required: true,
    },
    abbr: {
      type: String,
      required: true,
      maxLength: 3,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      maxLength: 255,
    },
  },
  { timestamps: true },
);

export default model('Leader', Leader);
