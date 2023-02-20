const express = require("express");
const mongoose = require("mongoose");
const Faculty = require("../api/models/Faculty");

const addFaculty = async (req, res, next) => {
  const faculty = new Faculty({
    name: req.body.name,
    short_form: req.body.short_form,
    username: req.body.username,
    subjects: req.body.subjects,
    updatedAt: Date.now(),
  });
  await faculty
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

const getFaculty = async (req, res, next) => {
  Faculty.find()
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

const getFacultyById = async (req, res, next) => {
  const { id } = req.params;

  Faculty.findById(id)
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
const getFacultyByIdAndUpdate = async (req, res, next) => {
  const { id } = req.params;
  Faculty.findByIdAndUpdate(id, {
    semester: req.body.semester,
    division: req.body.division,
    department: req.body.department,
    updatedAt: Date.now(),
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
const getFacultyByIdAndDelete = async (req, res, next) => {
  const { id } = req.params;
  Faculty.findByIdAndDelete(id)
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
const FacultyRouter = express.Router();
FacultyRouter.route("/").get(getFaculty).post(addFaculty);
FacultyRouter.route("/:id")
  .get(getFacultyById)
  .patch(getFacultyByIdAndUpdate)
  .delete(getFacultyByIdAndDelete);
module.exports = FacultyRouter;
