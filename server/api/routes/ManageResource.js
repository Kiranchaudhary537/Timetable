const express = require("express");
const ClassRouter = require("../../controller/ClassController");
const ClassroomRouter = require("../../controller/ClassroomController");
const FacultyRouter = require("../../controller/FacultyController");
const SubjectRouter = require("../../controller/SubjectController");
const TimeSlotRouter = require("../../controller/TimeslotController");

// router
const ManageResource = express.Router();

// class router
ManageResource.use("/class", ClassRouter);
ManageResource.use("/subject", SubjectRouter);
ManageResource.use("/faculty", FacultyRouter);
ManageResource.use("/classroom", ClassroomRouter);
ManageResource.use("/timeslot", TimeSlotRouter);

module.exports = ManageResource;
