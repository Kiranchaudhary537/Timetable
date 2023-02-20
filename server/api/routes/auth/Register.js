const User = require("../../models/User");
const bcrypt = require("bcrypt");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Registeration = (req, res) => {
  const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);
  const user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    confirmationCode: token,
  });
  user
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

const Register = express.Router();
Register.route("/").post(Registeration);
module.exports = Register;
