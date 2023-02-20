const express = require("express");
require("dotenv").config();
const forgotPassword = (req, res) => {};

const Forgot = express.Router();
Forgot.route("/").post(forgotPassword);
module.exports = Forgot;
