const mongoose = require("mongoose");

const ClassroomSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      enum: ["Lab", "Classroom"],
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
