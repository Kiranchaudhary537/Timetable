const express = require("express");
const Class = require("./../models/Class");

const addClass = async (req, res, next) => {
  const classes = new Class({
    semester: req.body.semester,
    division: req.body.division,
    department: req.body.department,
    updatedAt: Date.now(),
  });
  await classes
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

const getClass = async (req, res, next) => {
  Class.find()
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

const getClassById = async (req, res, next) => {
  const { id } = req.params;

  Class.findById(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        class: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const getClassByIdAndUpdate = async (req, res, next) => {
  const { id } = req.params;
  Class.findByIdAndUpdate(id, {
    semester: req.body.semester,
    division: req.body.division,
    department: req.body.department,
    updatedAt: Date.now(),
  })
    .then((e) => {
      res.status(200).send({
        status: "success",
        class: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const getClassByIdAndDelete = async (req, res, next) => {
  const { id } = req.params;
  Class.findByIdAndDelete(id)
    .then((e) => {
      res.status(200).send({
        status: "success",
        class: e,
      });
    })
    .catch((e) => {
      res.status(404).send({
        status: "failed",
        res: e,
      });
    });
};
const ClassRouter = express.Router();
ClassRouter.route("/").get(getClass).post(addClass);
ClassRouter.route("/:id")
  .get(getClassById)
  .patch(getClassByIdAndUpdate)
  .delete(getClassByIdAndDelete);
module.exports = ClassRouter;
