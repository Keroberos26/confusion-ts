import { Schema, model } from 'mongoose';

const Comment = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Dish = new Schema(
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
    category: {
      type: String,
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
    comments: [Comment],
  },
  { timestamps: true },
);

export default model('Dish', Dish);
