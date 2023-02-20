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
      role: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
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
