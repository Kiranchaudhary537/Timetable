const express = require("express");
const mongoose = require("mongoose");
const Subject = require("../api/models/Subject");

const addSubject = async (req, res, next) => {
  const { name, short_form, semester } = req.body;
  const subject = new Subject({
    name: name,
    short_form: short_form,
    semester: semester,
    updatedAt: Date.now(),
  });
  await subject
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

const getSubject = async (req, res, next) => {
  Subject.find()
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

const getSubjectById = async (req, res, next) => {
  const { id } = req.params;

  Subject.findById(id)
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
const getSubjectByIdAndUpdate = async (req, res, next) => {
  const { id } = req.params;
  Subject.findByIdAndUpdate(id, {
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
const getSubjectByIdAndDelete = async (req, res, next) => {
  const { id } = req.params;
  Subject.findByIdAndDelete(id)
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

const SubjectRouter = express.Router();
SubjectRouter.route("/").get(getSubject).post(addSubject);
SubjectRouter.route("/:id")
  .get(getSubjectById)
  .patch(getSubjectByIdAndUpdate)
  .delete(getSubjectByIdAndDelete);
module.exports = SubjectRouter;
