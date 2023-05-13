const express = require("express");
const mongoose = require("mongoose");
const Subject = require("../models/Subject");

const addSubject = async (req, res, next) => {
  const { name, short_form, semester, min, max } = req.body;
  console.log(semester);
  const subject = new Subject({
    name: name,
    short_form: short_form,
    semester: semester,
    min: min,
    current: 0,
    max: max,
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
      res.status(400).send({
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
      res.status(400).send({
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
      res.status(400).send({
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
      res.status(400).send({
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
      res.status(400).send({
        status: "failed",
        res: e,
      });
    });
};

const getSubjectByIdAndDeleteAll = async (req, res, next) => {
  req.body.map((id) => {
    Subject.findByIdAndDelete(id)
      .then((e) => {})
      .catch((e) => {
        res.status(400).send({
          status: "failed",
        });
      });
  });
  res.status(200).send({
    status: "success",
  });
};

const updateSubjects = async (req, res, next) => {
  console.log("trigger");
  const session = await mongoose.startSession();
  session.startTransaction();
  const Subjects = req.body.updatedSubject;
  try {
    Subjects?.map(async (e) => {
      const subject = await Subject.findOneAndUpdate(
        { short_form: e.name },
        { $inc: { current: e.no } },
        { new: true, upsert: true }
      );
      if (!subject) {
        throw new Error(`Subject with short form ${e.name} not found`);
      }
    });
    await session.commitTransaction(); // commit the transaction
    session.endSession();
    res.status(200).send({
      status: "CLASSROOMS TIMETABLE UPDATED",
      message: "nameOfClassroom",
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

const SubjectRouter = express.Router();
SubjectRouter.route("/")
  .get(getSubject)
  .post(addSubject)
  .patch(getSubjectByIdAndDeleteAll);
SubjectRouter.route("/:id")
  .get(getSubjectById)
  .post(updateSubjects)
  .patch(getSubjectByIdAndUpdate)
  .delete(getSubjectByIdAndDelete);
module.exports = SubjectRouter;
