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
            class: {
              type: Number,
              required: true,
            },
            division: {
              type: String,
              required: true,
            },
            faculty: {
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
