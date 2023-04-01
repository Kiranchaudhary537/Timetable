const express = require("express");
const ClassTimetable = require("./../../models/view/ClassTimetable");

const getTimetable = async (req, res) => {
  await ClassTimetable.find()
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
const getTimetableById = async (req, res) => {
  const { id } = req.params;
  await ClassTimetable.findById(id)
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
const getTimetableByName = async (req, res) => {
  const semester = req.query.semester;
  const division = req.query.division;

  await ClassTimetable.findOne({
    semester: semester,
    division: division,
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

const getClassTimetable = express.Router();
getClassTimetable.route("/").get(getTimetable);
getClassTimetable.route("/getclass").get(getTimetableByName);
getClassTimetable.route("/:id").get(getTimetableById);
module.exports = getClassTimetable;
