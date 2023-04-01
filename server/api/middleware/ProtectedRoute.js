const jwt = require("jsonwebtoken");
require("dotenv").config();

const ProtectedRoute = (req, res, next) => {
  let token = req.headers["x-access-token"];

  // console.log(req.headers["Authorization"]);

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.user.id = decoded.id;
    req.user.role = decoded.role;
    next();
  });

  // const token = req.body.token;
  // // console.log(token);
  // // console.log(!req.headers.authorization);
  // // console.log(req.headers["x-access-token"]);
  // // const token = req.headers.authorization.split(' ')[1];
  // // console.log(token);
  // if (!token) {
  //   return res.status(401).json({ message: "No token provided" });
  // }
  // jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
  //   if (err) {
  //     return res
  //       .status(401)
  //       .json({ message: "Failed to authenticate token", isLoggedIn: false });
  //   } else {
  //     req.user = {};

  //     next();
  //   }
  // });
};

const checkPermission = (req, res, next) => {
  if (req.user.role != "") {
    next();
  } else {
    res.status(401).send("NOT AUTHORIZED PERSON");
  }
};

module.exports = { ProtectedRoute, checkPermission };
