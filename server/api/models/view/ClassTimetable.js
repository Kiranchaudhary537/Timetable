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
    classrooms: [
      {
        id: {
          type: String,
          required: true,
        },
        no: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
          enum: ["Classroom", "Lab"],
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
            Faculty: {
              type: String,
              required: true,
            },
            Classroom: {
              type: String,
              required: true,
            },
            Type: {
              type:String,
              required:true,
            },
            id: {
              type: Number,
              required: true,
            },
          },
        ],
      },
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
