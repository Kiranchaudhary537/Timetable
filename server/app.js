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
const getCurrentLabStatus = require("./api/routes/view/CurrentLab");
const getCurrentFacultyStatus = require("./api/routes/view/CurrentFaculty");
const {
  ProtectedRoute,
  checkPermission,
} = require("./api/middleware/ProtectedRoute");
const app = express();
const port = 3000;
require("dotenv").config();

// database connection
db();

app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173" }));
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
app.use("/v1/manageresource", ManageResource);
app.use("/v1/managetimetable", ManageTimetable);
app.use("/v1/getclasstimetable", getClassTimetable);
app.use("/v1/getfacultytimetable", getFacultyTimetable);
app.use("/v1/getclassroomtimetable", getClassroomTimetable);
app.use("/v1/getcurrentlabstatus", getCurrentLabStatus);
app.use("/v1/getcurrentfucultystatus", getCurrentFacultyStatus);
// app.use("/v1/messages");
// app.use("/v1/requestforfaculty")
// app.use("/v1/profile")
app.use("/confirm", Confirm);
app.use("/signup", Register);
app.use("/login", Login);
app.use("/forgot", Forgot);

app.get("/", (req, res) => {
  res.status(200).send("USER ALREADY LOGGEDIN");
});
app.post("/", ProtectedRoute, (req, res) => {
  res.status(200).send("USER ALREADY LOGGEDIN");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
