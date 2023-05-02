const express = require("express");
const ClassroomTimetable = require("../../models/view/ClassroomTimetable");

const getTimetableById = async (req, res) => {
  try {
    const classrooms = await ClassroomTimetable.find({ type: "LAB" });
    res.status(200).send({ labs: classrooms });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      status: "failed to get timetable",
      message: false,
    });
  }
};

const getCurrentLabStatus = express.Router();
getCurrentLabStatus.route("/").get(getTimetableById);
module.exports = getCurrentLabStatus;
