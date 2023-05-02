const jwt = require("jsonwebtoken");
require("dotenv").config();

const ProtectedRoute = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.sendStatus(403);
      }
      req.user = { email: user?.email, role: user?.role };
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

const checkPermission = (req, res, next) => {
  if (req.user.role != "") {
    next();
  } else {
    res.status(401).send("NOT AUTHORIZED PERSON");
  }
};

module.exports = { ProtectedRoute, checkPermission };
