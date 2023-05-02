const { json } = require("body-parser");
const express = require("express");
const FacultyTimetable = require("../../models/view/FacultyTimetable");
const mongoose = require("mongoose");

const getFacultyTimetable = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const nameOfFaculty = [];
  try {
    for (const faculty of req.body.facultyNames) {
      if (faculty.name && faculty.name.trim() !== "") {
        const result = await FacultyTimetable.findOne({
          name: faculty.name,
        }).session(session);
        if (result) {
          nameOfFaculty.push(result.name);
        }
      }
    }

    await session.commitTransaction(); // commit the transaction
    session.endSession();
    res.status(200).send({
      status: "FACULTY TIMETABLE UPDATED",
      res: nameOfFaculty,
    });
  } catch (error) {
    await session.abortTransaction(); // rollback the transaction
    session.endSession();
    res.status(400).send({
      status: "FAILED TO UPDATE TIMETABLE OF FACULTY",
      res: error.message,
    });
  }
};

const getClassFaculty = express.Router();
getClassFaculty.route("/").get(getFacultyTimetable);

module.exports = getClassFaculty;
