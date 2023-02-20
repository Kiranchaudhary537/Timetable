const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const express = require("express");
require("dotenv").config();
const verifyUser = (req, res, next) => {
  //
  if (!req.params.id) {
    return res.status(404).json({ code: -1, msg: "TOKEN_NOT_FOUND" });
  }
  jwt.verify(req.params.id, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(404).json({ code: 0, msg: "LINK_EXPIRED" });
    }
  });

  User.findOne({
    confirmationCode: req.params.id,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      user.status = "Active";
      user.save((err) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
      });
    })
    .catch((e) => console.log("error", e));
};

const Confirm = express.Router();
Confirm.route("/:id").post(verifyUser);
module.exports = Confirm;
