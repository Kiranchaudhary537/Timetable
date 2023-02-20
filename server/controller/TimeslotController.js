const express = require("express");
const mongoose = require("mongoose");
const TimeSlot = require("../api/models/TimeSlot");

const addTimeSlot = async (req, res, next) => {
  const { starttime, endtime, day } = req.body;
  const timeslot = new TimeSlot({
    starttime: starttime,
    endtime: endtime,
    day: day,
    updatedAt: Date.now(),
  });
  await timeslot
    .save()
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};

const getTimeSlot = async (req, res, next) => {
  TimeSlot.find()
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};

const getTimeSlotById = async (req, res, next) => {
  const { id } = req.params;

  TimeSlot.findById(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const getTimeSlotByIdAndUpdate = async (req, res, next) => {
  const { id } = req.params;
  TimeSlot.findByIdAndUpdate(id, {
    // add data for timetable
  })
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const getTimeSlotByIdAndDelete = async (req, res, next) => {
  const { id } = req.params;
  TimeSlot.findByIdAndDelete(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const TimeSlotRouter = express.Router();
TimeSlotRouter.route("/").get(getTimeSlot).post(addTimeSlot);
TimeSlotRouter.route("/:id")
  .get(getTimeSlotById)
  .patch(getTimeSlotByIdAndUpdate)
  .delete(getTimeSlotByIdAndDelete);
module.exports = TimeSlotRouter;
