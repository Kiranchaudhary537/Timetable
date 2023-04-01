const mongoose = require("mongoose");

const FacultyTimetableSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    timeslots: [
      {
        id: {
          type: String,
          required: true,
        },
        timeslot: {
          type: String,
          required: true,
        },
      },
    ],
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
            Type: {
              type: String,
              required: true,
            },
            Semester: {
              type: String,
              required: true,
            },
            Division: {
              type: String,
              required: true,
            },
            Classroom: {
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

const FacultyTimetable = mongoose.model(
  "FacultyTimetable",
  FacultyTimetableSchema
);
module.exports = FacultyTimetable;
