const express = require("express");
const FacultyTimetable = require("./../../models/view/FacultyTimetable");

const getTimetable = async (req, res) => {
  await FacultyTimetable.find()
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
// const getTimetableByName = async (req, res) => {
//   const { id } = req.params;
//   await FacultyTimetable.findOne({ name: id })
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
const getTimetableById = async (req, res) => {
  const { id } = req.params;
  await FacultyTimetable.findById(id)
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

const getFacultyTimetable = express.Router();
getFacultyTimetable.route("/").get(getTimetable);
getFacultyTimetable.route("/:id").get(getTimetableById);
module.exports = getFacultyTimetable;
