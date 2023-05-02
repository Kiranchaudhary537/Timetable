const { json } = require("body-parser");
const express = require("express");
const FacultyTimetable = require("../../models/view/FacultyTimetable");
const mongoose = require("mongoose");
// const addOrUpdateFacultyTimetable = async (req, res) => {

//   let nameOfFaculty = [];
//   let hasError = false;
//   let error; // use a variable to keep track of errors
//   await Promise.all(
//     req.body.faculty.map(async (e) => {
//       if (e.name != "") {
//         await FacultyTimetable.findOneAndUpdate(
//           {
//             name: e.name,
//           },
//           {
//             name: e.name,
//             days: e.days,
//             timeslots: req.body.timeslots,
//           },
//           {
//             upsert: true,
//           }
//         )
//           .then((e) => {
//             nameOfFaculty.push(e.name);
//           })
//           .catch((e) => {
//             hasError = true;
//             error = e; // set the error flag
//           });
//       }
//     })
//   );

//   if (hasError) {
//     // handle errors after all operations have completed
//     res.status(400).send({
//       status: "FAILED TO UPDATE TIMETABLE OF FACULTY",
//       message: error,
//     });
//   } else {
//     res.status(200).send({
//       status: "FACULTY TIMETABLE UPDATED",
//       message: nameOfFaculty,
//     });
//   }
// };
const addOrUpdateFacultyTimetable = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let nameOfFaculty = [];
    await Promise.all(
      req.body.faculty?.map(async (e, i) => {
        if (e.name != null) {
          if (e.name.trim() != "") {
            await FacultyTimetable.findOneAndUpdate(
              {
                name: e.name,
              },
              {
                name: e.name,
                days: e.days,
                timeslots: req.body.timeslots,
              },
              {
                upsert: true,
                session, // pass the session object to the findOneAndUpdate function
              }
            )
              .then((e) => {
                nameOfFaculty.push(e.name);
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
      status: "FACULTY TIMETABLE UPDATED",
      message: nameOfFaculty,
    });
  } catch (error) {
    await session.abortTransaction(); // rollback the transaction
    session.endSession();
    res.status(400).send({
      status: "FAILED TO UPDATE TIMETABLE OF FACULTY",
      message: error.message,
    });
  }
};

const ManageFacultyController = express.Router();
ManageFacultyController.route("/").post(addOrUpdateFacultyTimetable);

module.exports = ManageFacultyController;
