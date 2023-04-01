const express = require("express");
const mongoose = require("mongoose");
const Faculty = require("../models/Faculty");

const addFaculty = async (req, res, next) => {
  const arr = () => {
    return req.body.subject.split(" ").filter((item) => item.trim() != "");
  };
  const faculty = new Faculty({
    name: req.body.name,
    short_form: req.body.short_form,
    subjects: arr(),
    updatedAt: Date.now(),
  });
  console.log(faculty);
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
const getFacultyByIdAndDeleteAll = async (req, res, next) => {
  req.body.map((id) => {
    Faculty.findByIdAndDelete(id)
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
const FacultyRouter = express.Router();
FacultyRouter.route("/")
  .get(getFaculty)
  .post(addFaculty)
  .patch(getFacultyByIdAndDeleteAll);
FacultyRouter.route("/:id")
  .get(getFacultyById)
  .patch(getFacultyByIdAndUpdate)
  .delete(getFacultyByIdAndDelete);
module.exports = FacultyRouter;
