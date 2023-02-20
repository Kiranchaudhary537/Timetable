const express = require("express");
const ClassroomTimetable = require("../models/view/ClassroomTimetable");
const ClassTimetable = require("../models/view/ClassTimetable");
const FacultyTimetable = require("../models/view/FacultyTimetable");

const getTimetable = async (req, res) => {
  await ClassTimetable.findOne({
    semester: req.body.semester,
    division: req.body.division,
  })
    .then((e) => {
      res.status(200).send({
        status: "reqest successfull",
        message: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed to get timetable",
        message: e,
      });
    });
};

// const addTimetable = async (req, res) => {
//   console.log(req.body);

//   const timeslots = {
//     Timeslot: req.body.timeslot,
//     Faculty: req.body.faculty,
//     Subject: req.body.subject,
//     Classroom: req.body.classroom,
//   };

//   const timetable = new ClassTimetable({
//     semester: req.body.semester,
//     division: req.body.division,
//     days: [
//       {
//         day: req.body.day,
//         timeslots: timeslots,
//       },
//     ],
//   });

//   const isAvailable = await ClassTimetable.findOne({
//     semester: req.body.semester,
//     division: req.body.division,
//     days: { $elemMatch: { day: req.body.day } },
//   });
//   console.log(isAvailable);

//   if (isAvailable) {
//     isAvailable.days.timeslots.push(timeslots);
//     isAvailable
//       .save()
//       .then((e) => {
//         res.status(200).send({
//           status: "success",
//           message: e,
//         });
//       })
//       .catch((e) => {
//         res.status(404).send({
//           status: "failed",
//           message: e,
//         });
//       });
//   } else {
//     await timetable
//       .save()
//       .then((e) => {
//         res.status(200).send({
//           status: "success",
//           message: e,
//         });
//       })
//       .catch((e) => {
//         res.status(404).send({
//           status: "failed",
//           message: e,
//         });
//       });
//   }
// };

const addOrUpdateTimetable = async (req, res, next) => {
  const timeslotsforclass = {
    Timeslot: req.body.timeslot,
    Faculty: req.body.faculty,
    Subject: req.body.subject,
    Classroom: req.body.classroom,
  };

  const timetable = new ClassTimetable({
    semester: req.body.semester,
    division: req.body.division,
    days: [
      {
        day: req.body.day,
        timeslots: timeslotsforclass,
      },
    ],
  });

  await ClassTimetable.findOneAndUpdate(
    {
      semester: req.body.semester,
      division: req.body.division,
      days: { $elemMatch: { day: req.body.day } },
    },
    {
      semester: req.body.semester,
      division: req.body.division,
      days: [
        {
          day: req.body.day,
          timeslots: timeslotsforclass,
        },
      ],
    },
    { upsert: true }
  )
    .then((e) => {
      // res.status(200).send({
      //   status: "successfully created or update",
      //   message: e,
      // });
      next();
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};
const addOrUpdateFacultyTimetable = async (req, res, next) => {
  const timeslotsforfaculty = {
    Timeslot: req.body.timeslot,
    Subject: req.body.subject,
    Classroom: req.body.classroom,
    class: req.body.class,
    division: req.body.division,
  };

  await FacultyTimetable.findOneAndUpdate(
    {
      name: req.body.faculty,
      days: { $elemMatch: { day: req.body.day } },
    },
    {
      name: req.body.faculty,
      days: [
        {
          day: req.body.day,
          timeslots: timeslotsforfaculty,
        },
      ],
    },
    { upsert: true }
  )
    .then((e) => {
      next();
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};
const addOrUpdateClassroomTimetable = async (req, res, next) => {
  const timeslotforclassroom = {
    Timeslot: req.body.timeslot,
    Faculty: req.body.faculty,
    Subject: req.body.subject,
    class: req.body.class,
    division: req.body.division,
  };
  await ClassroomTimetable.findOneAndUpdate(
    {
      no: req.body.classroom,
      days: { $elemMatch: { day: req.body.day } },
    },
    {
      no: req.body.classroom,
      days: [
        {
          day: req.body.day,
          timeslots: timeslotforclassroom,
        },
      ],
    },
    { upsert: true }
  )
    .then((e) => {
      res.status(200).send({
        status: "successfully created or update",
        message: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};
const deleteTimetable = async (req, res) => {
  await ClassTimetable.findOneAndDelete({
    semester: req.body.semester,
    division: req.body.division,
  })
    .then((e) => {
      res.status(200).send({
        status: "successfully timetable deleted",
        message: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};

const ManageTimetable = express.Router();
ManageTimetable.route("/")
  .get(getTimetable)
  .post(
    addOrUpdateTimetable,
    addOrUpdateFacultyTimetable,
    addOrUpdateClassroomTimetable
  )
  .delete(deleteTimetable);
module.exports = ManageTimetable;
