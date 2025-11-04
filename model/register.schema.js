import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    dob: {
      type: Date,
    },

    gender: {
      type: String,
    },

    mobile: {
      type: String,
    },

    email: {
      type: String,
    },

    pincode: {
      type: String,
    },

    state: {
      type: String,
    },

    city: {
      type: String,
    },

    address: {
      type: String,

    },

    profile: {
      type: String, // store file path or URL
      default: null,
    },

    aadhar: {
      type: String, // store file path or URL
      default: null,
    },

    registerType: {
      type: String,
      enum: ["join-as-member", "join-as-volunteer", "join-as-fundraiser", "join-as-intern"],
    },

    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Register", memberSchema);
