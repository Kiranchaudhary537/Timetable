const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
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
const getClassFaculty = require("./api/routes/view/getClassFaculty");

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
    secret: "http://localhost:5173",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/v1/manageresource", ManageResource);
app.use("/v1/managetimetable", ManageTimetable);
app.use("/v1/getclasstimetable", getClassTimetable);
app.use("/v1/getfacultytimetable", getFacultyTimetable);
app.use("/v1/getclassroomtimetable", getClassroomTimetable);
app.use("/v1/getcurrentlabstatus", getCurrentLabStatus);
app.use("/v1/getcurrentfucultystatus", getCurrentFacultyStatus);
// app.use("/v1/getclassfaculty", getClassFaculty);
// app.use("/v1/messages");
// app.use("/v1/requestforfaculty")
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
