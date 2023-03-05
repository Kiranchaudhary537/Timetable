const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const db = require("./api/config/Database");
const ManageResource = require("./api/routes/ManageResource");
const ManageTimetable = require("./api/routes/ManageTimetable");
const Confirm = require("./api/routes/auth/Confirm");
const Register = require("./api/routes/auth/Register");
const Login = require("./api/routes/auth/login");
const Forgot = require("./api/routes/auth/ForgotPassword");
const getClassTimetable = require("./api/routes/view/getClassTimetable");
const getClassroomTimetable = require("./api/routes/view/getClassroomTimetable");
const getFacultyTimetable = require("./api/routes/view/getFacultyTimetable");
const app = express();
const port = 3000;
require("dotenv").config();

// database connection
db();

app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

const checkPermission = (req, res, next) => {
  if (req.body.user == "Admin") {
    next();
  } else {
    res.status(404).send("you are not authorized person");
  }
};

app.use("/v1/manageresource", ManageResource);
app.use("/v1/managetimetable", ManageTimetable);
app.use("/v1/getclasstimetable", getClassTimetable);
app.use("/v1/getfacultytimetable", getClassroomTimetable);
app.use("/v1/getclassroomtimetable", getFacultyTimetable);
// app.use("/v1/getcurrentlaboccupancy")
// app.use("/v1/getfucultystatus")
// app.use("/v1/messages");
// app.use("/v1/requestforfaculty")
// app.use("/v1/profile")

app.use("/confirm", Confirm);
app.use("/register", Register);
app.use("/login", Login);
app.use("/forgot", Forgot);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
