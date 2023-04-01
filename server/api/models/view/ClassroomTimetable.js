const mongoose = require("mongoose");

const ClassroomTimetableSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      required: true,
    },
    days: [
      {
        day: {
          type: String,
          required: true,
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
        timeslots: [
          {
            Timeslot: {
              type: String,
              required: true,
            },
            Subject: {
              type: String,
              required: true,
            },
            Semester: {
              type: Number,
              required: true,
            },
            Division: {
              type: String,
              required: true,
            },
            Faculty: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ClassroomTimetable = mongoose.model(
  "ClassroomTimetable",
  ClassroomTimetableSchema
);
module.exports = ClassroomTimetable;
