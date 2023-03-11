const User = require("../../models/User");
const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = async (req, res) => {
  console.log("working");
  const { password } = req.body;
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // if (user && user.status == "Active") {
    const Match = await bcrypt.compare(password, user.password);
    if (Match) {
      res.status(200).send({
        user,
      });
    } else {
      res.status(404).send({ message: "User Not found." });
    }
  }
};

const Login = express.Router();
Login.route("/").post(login);
module.exports = Login;
