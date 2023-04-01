import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Manage/Class";
import Timeslots from "./pages/Manage/TimeSlots";
import Classroom from "./pages/Manage/Classroom";
import Faculty from "./pages/Manage/Faculty";
import ManageResource from "./pages/Manage/ManageResource";
import ManageTimetable from "./pages/Manage/ManageTimetable";
import Subject from "./pages/Manage/Subject";
import Classess from "./pages/View/Classess";
import Classrooms from "./pages/View/Classrooms";
import ClassroomTimetable from "./pages/View/ClassroomTimetable";
import ClassTimetable from "./pages/View/ClassTimetable";
import CurrentFacultyAvailability from "./pages/View/CurrentFacultyAvailibility";
import CurrentLabOccupancy from "./pages/View/CurrentLabOccupancy";
import Faculties from "./pages/View/Faculties";
import FacultyTimetable from "./pages/View/FacultyTimetable";
import Index from "./Index";
import { AuthContext } from "./context/authContext";
import axios from "./api/api";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function LoginAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Index />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageresource" element={<ManageResource />}>
          <Route path="/manageresource" element={<Navigate to="class" />} />
          <Route path="/manageresource/class" element={<Class />} />
          <Route path="/manageresource/faculty" element={<Faculty />} />
          <Route path="/manageresource/classroom" element={<Classroom />} />
          <Route path="/manageresource/timeslot" element={<Timeslots />} />
          <Route path="/manageresource/subject" element={<Subject />} />
        </Route>
        <Route path="/managetimetable" element={<ManageTimetable />} />
        <Route path="/classtimetable" element={<Classess />} />
        <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
        <Route path="/facultytimetable" element={<Faculties />} />
        <Route
          path="/facultytimetable/:FacultyId"
          element={<FacultyTimetable />}
        />
        <Route path="/classroomtimetable" element={<Classrooms />} />
        <Route
          path="/classroomtimetable/:ClassroomId"
          element={<ClassroomTimetable />}
        />
        <Route path="/currentlaboccupancy" element={<CurrentLabOccupancy />} />
        <Route
          path="/currentfacultyavailability"
          element={<CurrentFacultyAvailability />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
}
function StudentRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Index />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classtimetable" element={<Classess />} />
        <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}
function FacultyRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Index />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classtimetable" element={<Classess />} />
        <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
        <Route path="/facultytimetable" element={<Faculties />} />
        <Route
          path="/facultytimetable/:FacultyId"
          element={<FacultyTimetable />}
        />
        <Route path="/classroomtimetable" element={<Classrooms />} />
        <Route
          path="/classroomtimetable/:ClassroomId"
          element={<ClassroomTimetable />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Index />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classtimetable" element={<Classess />} />
        <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
        <Route path="/facultytimetable" element={<Faculties />} />
        <Route
          path="/facultytimetable/:FacultyId"
          element={<FacultyTimetable />}
        />
        <Route path="/classroomtimetable" element={<Classrooms />} />
        <Route
          path="/classroomtimetable/:ClassroomId"
          element={<ClassroomTimetable />}
        />
        <Route path="/currentlaboccupancy" element={<CurrentLabOccupancy />} />
        <Route
          path="/currentfacultyavailability"
          element={<CurrentFacultyAvailability />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

function CoordinatorRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/" element={<Index />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageresource" element={<ManageResource />}>
          <Route path="/manageresource" element={<Navigate to="class" />} />
          <Route path="/manageresource/class" element={<Class />} />
          <Route path="/manageresource/faculty" element={<Faculty />} />
          <Route path="/manageresource/classroom" element={<Classroom />} />
          <Route path="/manageresource/timeslot" element={<Timeslots />} />
          <Route path="/manageresource/subject" element={<Subject />} />
        </Route>
        <Route path="/managetimetable" element={<ManageTimetable />} />
        <Route path="/classtimetable" element={<Classess />} />
        <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
        <Route path="/facultytimetable" element={<Faculties />} />
        <Route
          path="/facultytimetable/:FacultyId"
          element={<FacultyTimetable />}
        />
        <Route path="/classroomtimetable" element={<Classrooms />} />
        <Route
          path="/classroomtimetable/:ClassroomId"
          element={<ClassroomTimetable />}
        />
        <Route path="/currentlaboccupancy" element={<CurrentLabOccupancy />} />
        <Route
          path="/currentfacultyavailability"
          element={<CurrentFacultyAvailability />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

function authHeader() {
  const token = Cookies.get("token");
  if (token) {
    return { "x-access-token": token };
  } else {
    return {};
  }
}

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   axios
  //     .post("/")
  //     .then((e) => {
  //       setIsLoggedIn(true);
  //       console.log(e);
  //     })
  //     .catch((e) => {
  //       setIsLoggedIn(false);
  //       console.log(e);
  //     });
  // }, []);

  // const loginHandler = () => {
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  // const contextValue = {
  //   isLoggedIn: isLoggedIn,
  //   login: loginHandler,
  //   logout: logoutHandler,
  // };
  return (
    <Router>
      {/* <AuthContext.Provider value={contextValue}> */}
      <AppRoutes />
      {/* {isLoggedIn ? <AppRoutes /> : <LoginAppRoutes />} */}
      {/* </AuthContext.Provider> */}
    </Router>
  );
}
