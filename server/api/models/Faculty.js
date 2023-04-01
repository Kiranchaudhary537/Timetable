const mongoose = require("mongoose");

const FacultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    short_form: {
      type: String,
      required: true,
    },
    username: {
      role: String,
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    subjects: [
      {
        type: String,
        required: true,
      },
    ],
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

const Faculty = mongoose.model("Faculty", FacultySchema);
module.exports = Faculty;
