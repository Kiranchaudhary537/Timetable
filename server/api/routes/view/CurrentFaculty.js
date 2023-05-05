const express = require("express");
const FacultyTimetable = require("./../../models/view/FacultyTimetable");

const getTimetableById = async (req, res) => {
  const name = req.body.name;
  console.log(name);
  await FacultyTimetable.findOne({
    name: name,
  })
    .then((e) => {
      res.status(200).send(e);
    })
    .catch((e) => {
      res.status(400).send("error while working");
    });
};

const getCurrentFacultyStatus = express.Router();
getCurrentFacultyStatus.route("/").post(getTimetableById);
module.exports = getCurrentFacultyStatus;
