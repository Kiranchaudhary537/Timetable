const express = require("express");
const FacultyTimetable = require("./../../models/view/FacultyTimetable");

const convertTime = (timeStr) => {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};

const checkCurrent = (starttime, endtime) => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  console.log(hh + " " + mm);
  starttime = convertTime(starttime);
  endtime = convertTime(endtime);
  let [shours, sminutes] = starttime.split(":");
  let [ehours, eminutes] = endtime.split(":");
  console.log(shours + " " + sminutes);
  console.log(ehours + " " + eminutes);
  if (shours < hh && ehours > hh) {
    return true;
  } else if (shours == hh && sminutes <= mm) {
    return true;
  } else if (ehours == hh && eminutes < mm) {
    return true;
  } else {
    return false;
  }
};
const getDayName = (dayIndex) => {
  let daysArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysArray[dayIndex];
};

const dayName = getDayName(new Date().getDay());

const getTimetableById = async (req, res) => {
  const { id } = req.params;
  const user = await FacultyTimetable.findById(id);
  user.days.map((e) => {
    if (e.day == dayName) {
      e.timeslots.map((t) => {
        const [starttime, endtime] = t.Timeslot.split("-");
        if (checkCurrent(starttime.trim(), endtime.trimStart()) == true) {
          res.status(200).send({
            status: "reqest successfull",
            message: true,
          });
        } else {
          res.status(404).send({
            status: "failed to get timetable",
            message: false,
          });
        }
      });
    }
  });
};

const getCurrentFacultyStatus = express.Router();
getCurrentFacultyStatus.route("/:id").get(getTimetableById);
module.exports = getCurrentFacultyStatus;
