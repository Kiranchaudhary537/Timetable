const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../../models/User");
const RequestFacultyRole = require("../../models/RequestFaculty");

const Register = express.Router();

Register.post("/", async (req, res) => {
  try {
    const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET);

    const newUser = new User({
      firstname: req.body.fname,
      lastname: req.body.lname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmationCode: token,
    });

    await newUser.save();

    if (req.body.role == "FACULTY") {
      const requestFacultyRole = new RequestFacultyRole({
        email: req.body.email,
      });

      await requestFacultyRole.save();
    }

    res.status(201).json({
      message: "User created.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error has occurred.",
    });
  }
});



module.exports = Register;
