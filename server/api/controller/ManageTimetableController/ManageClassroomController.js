const { json } = require("body-parser");
const express = require("express");
const ClassroomTimetable = require("../../models/view/ClassroomTimetable");

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
      res.status(400).send({
        status: "failed to delete timetable",
        message: e,
      });
    });
};

const ManageClassroomController = express.Router();
ManageClassroomController.route("/").post(addOrUpdateClassroomTimetable);

module.exports = ManageClassroomController;
