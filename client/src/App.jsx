import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/LogIn";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Manage/Resources/Class";
import Timeslots from "./pages/Manage/Resources/TimeSlots";
import Classroom from "./pages/Manage/Resources/Classroom";
import Faculty from "./pages/Manage/Resources/Faculty";
import Subject from "./pages/Manage/Resources/Subject";
import ManageResource from "./pages/Manage/Resources/ManageResource";
import ManageTimetable from "./pages/Manage/Timetable/ManageTimetable";
import Classess from "./pages/View/Classess";
import Classrooms from "./pages/View/Classrooms";
import ClassroomTimetable from "./pages/View/ClassroomTimetable";
import ClassTimetable from "./pages/View/ClassTimetable";
import CurrentFacultyAvailability from "./pages/View/CurrentFacultyAvailibility";
import CurrentLabOccupancy from "./pages/View/CurrentLabOccupancy";
import Faculties from "./pages/View/Faculties";
import FacultyTimetable from "./pages/View/FacultyTimetable";
import Index from "./Index";
import { Provider } from "react-redux";
import store from "./features/timetable/timetablestore";
import PrivateRoute from "./PrivateRoutes";

// import 'tw-elements/dist/index.css';

function LoginAppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="login" />} />
      <Route path="/login" index element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}

function studentRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/classtimetable" element={<Classess />} />
      <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
    </>
  );
}
function FacultyRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );
}

function AdminRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );
}

function CoordinatorRoutes() {
  return (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );
}

export default function App() {
  const userRole = localStorage.getItem("userRole")
    ? localStorage.getItem("userRole")
    : "";
  // const userRole = "coordinator";
  const studentRoutes = userRole == "STUDENT" && (
    <>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/classtimetable" element={<Classess />} />
      <Route path="/classtimetable/:ClassId" element={<ClassTimetable />} />
    </>
  );
  const facultyRoutes = userRole == "FACULTY" && (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );
  const adminRoutes = userRole == "ADMIN" && (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );

  const coordinatorRoutes = userRole == "COORDINATOR" && (
    <>
      <Route index element={<Dashboard />} />
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
    </>
  );

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Index />}>
              {studentRoutes}
              {facultyRoutes}
              {adminRoutes}
              {coordinatorRoutes}
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

{
  /* <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Index />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manageresource" element={<ManageResource />}>
                <Route
                  path="/manageresource"
                  element={<Navigate to="class" />}
                />
                <Route path="/manageresource/class" element={<Class />} />
                <Route path="/manageresource/faculty" element={<Faculty />} />
                <Route
                  path="/manageresource/classroom"
                  element={<Classroom />}
                />
                <Route
                  path="/manageresource/timeslot"
                  element={<Timeslots />}
                />
                <Route path="/manageresource/subject" element={<Subject />} />
              </Route>
              <Route path="/managetimetable" element={<ManageTimetable />} />
              <Route path="/classtimetable" element={<Classess />} />
              <Route
                path="/classtimetable/:ClassId"
                element={<ClassTimetable />}
              />
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
              <Route
                path="/currentlaboccupancy"
                element={<CurrentLabOccupancy />}
              />
              <Route
                path="/currentfacultyavailability"
                element={<CurrentFacultyAvailability />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider> */
}
