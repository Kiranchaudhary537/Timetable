const express = require("express");
const ClassroomTimetable = require("./../../models/view/ClassroomTimetable");

const getTimetable = async (req, res) => {
  await ClassroomTimetable.find()
    .then((e) => {
      res.status(200).send({
        status: "success",
        message: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        message: e,
      });
    });
};

const getTimetableById = async (req, res) => {
  const { id } = req.params;
  await ClassroomTimetable.findById(id)
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

const getClassroomTimetable = express.Router();
getClassroomTimetable.route("/").get(getTimetable);
getClassroomTimetable.route("/:id").get(getTimetableById);
module.exports = getClassroomTimetable;
