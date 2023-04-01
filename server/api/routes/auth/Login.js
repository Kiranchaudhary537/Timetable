const User = require("../../models/User");
const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { password } = req.body;
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    // if (user && user.status == "Active") {
    const Match = await bcrypt.compare(password, user.password);
    if (Match) {
      const payload = {
        message: "user found",
        uid: user._id,
        email: user.email,
        role: user.role,
        first: user.firstname,
        last: user.lastname,
        update: user.updatedAt,
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        },
        (error, token) => {
          if (error) {
            return res.status(500).send({ message: error });
          } else {
            console.log(token);
            res.status(200).send({
              message: "User Logged In",
              token: token,
              role: user.role,
            });
            return;
          }
        }
      );
    } else {
      res.status(404).send({ message: "User Not found." });
    }
  }
};

const Login = express.Router();
Login.route("/").post(login);
module.exports = Login;
