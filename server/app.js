const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const cors = require("cors");
const db = require("./api/config/Database.js");
const ManageResource = require("./api/routes/ManageResource.js");
const ManageTimetable = require("./api/routes/ManageTimetable.js");
const Confirm = require("./api/routes/auth/Confirm.js");
const Register = require("./api/routes/auth/Register.js");
const Login = require("./api/routes/auth/login.js");
const Forgot = require("./api/routes/auth/ForgotPassword.js");
const getClassTimetable = require("./api/routes/view/getClassTimetable.js");
const getClassroomTimetable = require("./api/routes/view/getClassroomTimetable.js");
const getFacultyTimetable = require("./api/routes/view/getFacultyTimetable.js");
const getCurrentLabStatus = require("./api/routes/view/CurrentLab.js");
const getCurrentFacultyStatus = require("./api/routes/view/CurrentFaculty.js");

const {
  ProtectedRoute,
  checkPermission,
} = require("./api/middleware/ProtectedRoute");
const getClassFaculty = require("./api/routes/view/getClassFaculty");
const RequestFacultyRole = require("./api/models/RequestFaculty");
const getRequestFacultyRole = require("./api/routes/utils/RequestForFaculty");

const app = express();
const port = 3000;
require("dotenv").config();

// database connection
db();

app.use(express.json({ limit: "100mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/v1/manageresource", ProtectedRoute, ManageResource);
app.use("/v1/managetimetable", ProtectedRoute, ManageTimetable);
app.use("/v1/getclasstimetable", ProtectedRoute, getClassTimetable);
app.use("/v1/getfacultytimetable", ProtectedRoute, getFacultyTimetable);
app.use("/v1/getclassroomtimetable", ProtectedRoute, getClassroomTimetable);
app.use("/v1/getcurrentlabstatus", ProtectedRoute, getCurrentLabStatus);
app.use("/v1/getcurrentfucultystatus", ProtectedRoute, getCurrentFacultyStatus);
app.use("/v1/requestforfaculty", ProtectedRoute, getRequestFacultyRole);
// app.use("/v1/getclassfaculty", getClassFaculty);
// app.use("/v1/messages");
// app.use("/v1/profile")
app.use("/confirm", Confirm);
app.use("/signup", Register);
app.use("/login", Login);
app.use("/forgot", Forgot);

app.get("/v1/checkLogin", ProtectedRoute, (req, res) => {
  res.json({ role: req.user.role, loggedIn: true });
});

app.get("/", (req, res) => {
  res.status(200).send("USER ALREADY LOGGEDIN");
});
app.post("/", ProtectedRoute, (req, res) => {
  res.status(200).send("USER ALREADY LOGGEDIN");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
