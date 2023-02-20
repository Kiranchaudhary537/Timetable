const User = require("../../models/User");
const express = require("express");
require("dotenv").config();
const login = async (req, res) => {
  await User.findOne({
    email: req.body.email,
  })
    .then((e) => {})
    .catch((e) => {});
};

const Login = express.Router();
Login.route("/").post(login);
module.exports = Login;
