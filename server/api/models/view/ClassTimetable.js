const mongoose = require("mongoose");

const ClassTimetableSchema = new mongoose.Schema(
  {
    semester: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
    },
    days:[
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
            Faculty: {
              type: String,
              required: true,
            },
            Classroom: {
              type: String,
              required: true,
            },
          },
        ],
      }
    ],
    // day: {
    //   type: String,
    //   required: true,
    //   enum: [
    //     "Monday",
    //     "Tuesday",
    //     "Wednesday",
    //     "Thursday",
    //     "Friday",
    //     "Saturnday",
    //     "Sunday",
    //   ],
    // },
    // timeslots: [
    //   {
    //     Timeslot: {
    //       type: String,
    //       required: true,
    //     },
    //     Subject: {
    //       type: String,
    //       required: true,
    //     },
    //     Faculty: {
    //       type: String,
    //       required: true,
    //     },
    //     Classroom: {
    //       type: String,
    //       required: true,
    //     },
    //   },
    // ],
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
const ClassTimetable = mongoose.model("ClassTimetable", ClassTimetableSchema);
module.exports = ClassTimetable;
