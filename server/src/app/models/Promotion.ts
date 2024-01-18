import { Schema, model } from 'mongoose';

const Promotion = new Schema(
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
    },
    price: {
      type: Number,
      required: true,
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

export default model('Promotion', Promotion);
