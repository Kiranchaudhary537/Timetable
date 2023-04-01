const express = require("express");
const Classroom = require("../models/Classroom");

const addClassroom = async (req, res) => {
  const classroom = new Classroom({
    no: req.body.no,
    type: req.body.type,
    updatedAt: Date.now(),
  });
  console.log(req.body);
  await classroom
    .save()
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};

const getClassroom = async (req, res, next) => {
  Classroom.find()
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};

const getClassroomById = async (req, res, next) => {
  const { id } = req.params;

  Classroom.findById(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};
const getClassroomByIdAndUpdate = async (req, res, next) => {
  const { id } = req.params;
  Classroom.findByIdAndUpdate(id, {
    no: req.body.no,
    type: req.body.type,
    updatedAt: Date.now(),
  })
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};
const getClassroomByIdAndDelete = async (req, res, next) => {
  const { id } = req.params;
  Classroom.findByIdAndDelete(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        res: e,
      });
    })
    .catch((e) => {
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};
const getClassroomByIdAndDeleteAll = async (req, res, next) => {
  req.body.map((id) => {
    Classroom.findByIdAndDelete(id)
      .then((e) => {})
      .catch((e) => {
        res.status(404).send({
          status: "failed",
        });
      });
  });
  res.status(200).send({
    status: "success",
  });
};
const ClassroomRouter = express.Router();
ClassroomRouter.route("/")
  .get(getClassroom)
  .post(addClassroom)
  .patch(getClassroomByIdAndDeleteAll);
ClassroomRouter.route("/:id")
  .get(getClassroomById)
  .patch(getClassroomByIdAndUpdate)
  .delete(getClassroomByIdAndDelete);
module.exports = ClassroomRouter;
