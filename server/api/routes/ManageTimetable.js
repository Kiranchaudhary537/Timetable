const { json } = require("body-parser");
const express = require("express");
const ManageClassController = require("../controller/ManageTimetableController/ManageClassController");
const ManageClassroomController = require("../controller/ManageTimetableController/ManageClassroomController");
const ManageFacultyController = require("../controller/ManageTimetableController/ManageFacultyController");

const ManageTimetable = express.Router();
ManageTimetable.use("/class", ManageClassController);
ManageTimetable.use("/faculty", ManageFacultyController);
ManageTimetable.use("/classroom", ManageClassroomController);

module.exports = ManageTimetable;

// const ClassroomTimetable = require("../models/view/ClassroomTimetable");
// const ClassTimetable = require("../models/view/ClassTimetable");
// const FacultyTimetable = require("../models/view/FacultyTimetable");

// const getTimetable = async (req, res) => {
//   await ClassTimetable.findOne({
//     semester: req.body.semester,
//     division: req.body.division,
//   })
//     .then((e) => {
//       res.status(200).send({
//         status: "reqest successfull",
//         message: e,
//       });
//     })
//     .catch((e) => {
//       res.status(404).send({
//         status: "failed to get timetable",
//         message: e,
//       });
//     });
// };

// // const addTimetable = async (req, res) => {
// //   console.log(req.body);

// //   const timeslots = {
// //     Timeslot: req.body.timeslot,
// //     Faculty: req.body.faculty,
// //     Subject: req.body.subject,
// //     Classroom: req.body.classroom,
// //   };

// //   const timetable = new ClassTimetable({
// //     semester: req.body.semester,
// //     division: req.body.division,
// //     days: [
// //       {
// //         day: req.body.day,
// //         timeslots: timeslots,
// //       },
// //     ],
// //   });

// //   const isAvailable = await ClassTimetable.findOne({
// //     semester: req.body.semester,
// //     division: req.body.division,
// //     days: { $elemMatch: { day: req.body.day } },
// //   });
// //   console.log(isAvailable);

// //   if (isAvailable) {
// //     isAvailable.days.timeslots.push(timeslots);
// //     isAvailable
// //       .save()
// //       .then((e) => {
// //         res.status(200).send({
// //           status: "success",
// //           message: e,
// //         });
// //       })
// //       .catch((e) => {
// //         res.status(404).send({
// //           status: "failed",
// //           message: e,
// //         });
// //       });
// //   } else {
// //     await timetable
// //       .save()
// //       .then((e) => {
// //         res.status(200).send({
// //           status: "success",
// //           message: e,
// //         });
// //       })
// //       .catch((e) => {
// //         res.status(404).send({
// //           status: "failed",
// //           message: e,
// //         });
// //       });
// //   }
// // };

// const addOrUpdateTimetable = async (req, res, next) => {
//   // const timeslotsforclass = {
//   //   Timeslot: req.body.timeslot,
//   //   Faculty: req.body.faculty,
//   //   Subject: req.body.subject,
//   //   Classroom: req.body.classroom,
//   // };
//   // console.log(req.body.days);
//   // const timetable = new ClassTimetable({
//   //   semester: req.body.semester,
//   //   division: req.body.division,
//   //   days: [
//   //     {
//   //       day: req.body.day,
//   //       timeslots: timeslotsforclass,
//   //     },
//   //   ],
//   // });
//   // console.log(JSON.parse(req.body));
//   //req.body = JSON.stringify(req.body);
//   await ClassTimetable.findOneAndDelete({
//     semester: req.body.timetable.semester,
//     division: req.body.timetable.division,
//   });
//   const classtimetable = new ClassTimetable(req.body);
//   await ClassTimetable.findOneAndUpdate(
//     {
//       semester: req.body.timetable.semester,
//       division: req.body.timetable.division,
//     },
//     {
//       semester: req.body.timetable.semester,
//       division: req.body.timetable.division,
//       days: req.body.timetable.days,
//       timeslots: req.body.timeslots,
//       classroomno: req.body.classroomno,
//     },
//     { upsert: true, minimize: false, new: true }
//   )
//     .then((e) => {
//       res.status(200).send({
//         status: "successfully created or update",
//         message: e,
//       });
//       // next();
//     })
//     .catch((e) => {
//       res.status(400).send({
//         status: "failed to update timetable",
//         message: e,
//       });
//     });
// };
// const addOrUpdateFacultyTimetable = async (req, res, next) => {
//   let nameOfFaculty = [];
//   req.body.faculty.map(async (e) => {
//     if (e.name.trim() != "")
//       await FacultyTimetable.findOneAndUpdate(
//         {
//           name: e.name,
//         },
//         {
//           name: e.name,
//           days: e.days,
//         },
//         {
//           upsert: true,
//         }
//       )
//         .then((e) => {
//           nameOfFaculty.push(e.name);
//         })
//         .catch((e) => {
//           res.status(404).send({
//             status: "FAILED TO UPDATE TIMETABLE OF FACULTY",
//             message: e,
//           });
//           return;
//         });
//   });

//   res.status(200).send({
//     status: "FACULTY TIMETABLE UPDATED",
//     message: nameOfFaculty,
//   });
// };
// // await FacultyTimetable.findOneAndUpdate(
// //   {
// //     name: req.body.faculty,
// //     days: { $elemMatch: { day: req.body.day } },
// //   },
// //   {
// //     name: req.body.faculty,
// //     days: [
// //       {
// //         day: req.body.day,
// //         timeslots: timeslotsforfaculty,
// //       },
// //     ],
// //   },
// //   { upsert: true }
// // )
// const addOrUpdateClassroomTimetable = async (req, res, next) => {
//   const timeslotforclassroom = {
//     Timeslot: req.body.timeslot,
//     Faculty: req.body.faculty,
//     Subject: req.body.subject,
//     class: req.body.class,
//     division: req.body.division,
//   };
//   await ClassroomTimetable.findOneAndUpdate(
//     {
//       no: req.body.classroom,
//       days: { $elemMatch: { day: req.body.day } },
//     },
//     {
//       no: req.body.classroom,
//       days: [
//         {
//           day: req.body.day,
//           timeslots: timeslotforclassroom,
//         },
//       ],
//     },
//     { upsert: true }
//   )
//     .then((e) => {
//       res.status(200).send({
//         status: "successfully created or update",
//         message: e,
//       });
//     })
//     .catch((e) => {
//       res.status(404).send({
//         status: "failed to delete timetable",
//         message: e,
//       });
//     });
// };
// const deleteTimetable = async (req, res) => {
//   await ClassTimetable.findOneAndDelete({
//     semester: req.body.semester,
//     division: req.body.division,
//   })
//     .then((e) => {
//       res.status(200).send({
//         status: "successfully timetable deleted",
//         message: e,
//       });
//     })
//     .catch((e) => {
//       res.status(404).send({
//         status: "failed to delete timetable",
//         message: e,
//       });
//     });
// };
