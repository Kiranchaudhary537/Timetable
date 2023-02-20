const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema(
  {
    semester: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
      default: "I.T.",
    },
    updatedAt: {
      type: Date,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Class = mongoose.model("Class", ClassSchema);
module.exports = Class;
