import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    price: {
      type: Number,
      required: true,
    },

    originalPrice: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    stock: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      required: true,
    },

    highlights: [
      {
        type: String,
      },
    ],

    specifications: {
      type: Map,
      of: String,
      default: {},
    },

    offers: [
      {
        type: String,
      },
    ],

    delivery: {
      shipping: String,
      eta: String,
      replacement: String,
      warranty: String,
    },

    featured: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);