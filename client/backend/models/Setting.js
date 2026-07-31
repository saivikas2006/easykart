import mongoose from "mongoose";

const settingSchema = new mongoose.Schema(
  {
    storeName: {
      type: String,
      default: "EasyKart",
    },

    supportEmail: {
      type: String,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    facebook: {
      type: String,
      default: "",
    },

    instagram: {
      type: String,
      default: "",
    },

    twitter: {
      type: String,
      default: "",
    },

    linkedin: {
      type: String,
      default: "",
    },

    codEnabled: {
      type: Boolean,
      default: true,
    },

    shippingCharge: {
      type: Number,
      default: 0,
    },

    freeShippingAbove: {
      type: Number,
      default: 999,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Setting", settingSchema);