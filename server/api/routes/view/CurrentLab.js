const express = require("express");
const ClassroomTimetable = require("../../models/view/ClassroomTimetable");

const getTimetableById = async (req, res) => {
  const { id } = req.params;
  const user = await ClassroomTimetable.findOne(id);
  user.days.map((e) => {
    if (e.day == dayName) {
      e.timeslots.map((t) => {
        const [starttime, endtime] = t.Timeslot.split("-");
        if (checkCurrent(starttime.trim(), endtime.trimStart()) == true) {
          res.status(200).send({
            status: "reqest successfull",
            message: true,
          });
        }
      });
    }
  });
  res.status(404).send({
    status: "failed to get timetable",
    message: false,
  });
};

const getCurrentLabStatus = express.Router();
getCurrentLabStatus.route("/:id").get(getTimetableById);
module.exports = getCurrentLabStatus;
