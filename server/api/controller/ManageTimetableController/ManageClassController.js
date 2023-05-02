const { json } = require("body-parser");
const express = require("express");
const ClassTimetable = require("../../models/view/ClassTimetable");

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

const addOrUpdateTimetable = async (req, res, next) => {
  await ClassTimetable.findOneAndDelete({
    semester: req.body.timetable.semester,
    division: req.body.timetable.division,
  });
  const classtimetable = new ClassTimetable(req.body);
  await ClassTimetable.findOneAndUpdate(
    {
      semester: req.body.timetable.semester,
      division: req.body.timetable.division,
    },
    {
      semester: req.body.timetable.semester,
      division: req.body.timetable.division,
      days: req.body.timetable.days,
      timeslots: req.body.timeslots,
      classrooms: req.body.classrooms,
     
    },
    { upsert: true, minimize: false, new: true }
  )
    .then((e) => {
      res.status(200).send({
        status: "successfully created or update",
        message: e,
      });
      // next();
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed to update timetable",
        message: e,
      });
    });
};
const deleteTimetable = async (req, res) => {
  const { id } = req.params;
  await ClassTimetable.findByIdAndDelete(id)
    .then((e) => {
      res.status(200).send({
        status: "successfully timetable deleted",
        message: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};

const ManageClassController = express.Router();
ManageClassController.route("/").get(getTimetable).post(addOrUpdateTimetable);
ManageClassController.route("/:id").delete(deleteTimetable);
module.exports = ManageClassController;
