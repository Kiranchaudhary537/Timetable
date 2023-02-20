const mongoose = require("mongoose");

const TimeSlotSchema = new mongoose.Schema(
  {
    starttime: {
      type: String,
      required: true,
    },
    endtime: {
      type: String,
      required: true,
    },
    // class: {
    //   role: String,
    //   id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    // },
    // classroom: {
    //   role: String,
    //   id: { type: mongoose.Schema.Types.ObjectId, ref: "Classroom" },
    // },
    // faculty: {
    //   role: String,
    //   id: { type: mongoose.Schema.Types.ObjectId, ref: "Faculty" },
    // },
    // subject: {
    //   role: String,
    //   id: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    // },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturnday",
        "Sunday",
      ],
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

const TimeSlot = mongoose.model("TimeSlot", TimeSlotSchema);
module.exports = TimeSlot;
