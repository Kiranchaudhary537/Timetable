const User = require("../../models/User");
const bcrypt = require("bcrypt");
const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Registeration = async (req, res) => {
  const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

  try {
    const user = new User({
      firstname: req.body.fname,
      lastname: req.body.lname,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmationCode: token,
    });
    user.save((error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          message: "An error has occured.",
        });
      } else {
        res.status(201).json({
          message: "User created.",
        });
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "An error has occured.",
    });
  }
};
const checkpoint = (req, res) => {
  res.send("point working");
};
const Register = express.Router();
Register.route("/").post(Registeration).get(checkpoint);
module.exports = Register;
