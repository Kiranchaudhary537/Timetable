const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    short_form: {
      type: String,
      require: true,
    },
    semester: {
      type: Number,
      require: true,
    },
    min: {
      type: Number,
      default: 0,
      require: true,
    },
    max: {
      type: Number,
      require: true,
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

const Subject = mongoose.model("Subject", SubjectSchema);
module.exports = Subject;
