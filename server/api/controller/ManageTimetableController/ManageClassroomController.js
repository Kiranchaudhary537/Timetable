const { json } = require("body-parser");
const express = require("express");
const ClassroomTimetable = require("../../models/view/ClassroomTimetable");
const { default: mongoose } = require("mongoose");

const addOrUpdateClassroomTimetable = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let nameOfClassroom = [];
    await Promise.all(
      req.body.classroomtimetable?.map(async (e, i) => {
        console.log(e.days[0]);
        if (e.no != null) {
          if (e.no?.trim() != "") {
            console.log(e);
            await ClassroomTimetable.findOneAndUpdate(
              {
                no: e.no,
                type: e.type,
              },
              {
                no: e.no,
                type: e.type,
                days: e.days,
                timeslots: req.body.timeslots,
              },
              {
                upsert: true,
                session, // pass the session object to the findOneAndUpdate function
              }
            )
              .then((e) => {
                nameOfClassroom.push({ no: e.no, type: e.type });
              })
              .catch((e) => {
                console.log("index " + i);
                console.log(e);
              });
          }
        }
      })
    );

    await session.commitTransaction(); // commit the transaction
    session.endSession();
    res.status(200).send({
      status: "ClASSROOMS TIMETABLE UPDATED",
      message: nameOfClassroom,
    });
  } catch (error) {
    await session.abortTransaction(); // rollback the transaction
    session.endSession();
    res.status(400).send({
      status: "FAILED TO UPDATE TIMETABLE OF CLASSROOMS",
      message: error.message,
    });
  }
};

const ManageClassroomController = express.Router();
ManageClassroomController.route("/").post(addOrUpdateClassroomTimetable);

module.exports = ManageClassroomController;
