const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema(
  {
    no: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      enum: ["LAB", "CLASSROOM"],
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

const Classroom = mongoose.model("Classroom", ClassroomSchema);
module.exports = Classroom;
