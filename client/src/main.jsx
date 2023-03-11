import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import App from "./App";
import "./index.css";
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

const AdminProtected = ({ children }) => {
  if (false) {
    return <h1>your are not admin</h1>;
  }
  return children;
};
const CoordinatorProtected = ({ children }) => {
  if (false) {
    return <h1>your are not Coordinator</h1>;
    //navigate to 404 page or not authorized page
  }
  return children;
};
const FacultyProtected = ({ children }) => {
  if (false) {
    return <h1>your are not Faculty</h1>;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/manageresource",
        element: (
          <CoordinatorProtected>
            <ManageResource />
          </CoordinatorProtected>
        ),

        children: [
          {
            index: true,
            element: <Navigate to="class" />,
          },
          {
            path: "/manageresource/class",
            element: <Class />,
          },
          {
            path: "/manageresource/faculty",
            element: <Faculty />,
          },
          {
            path: "/manageresource/classroom",
            element: <Classroom/>,
          },
          {
            path: "/manageresource/timeslot",
            element: <Timeslots/>,
          },
          {
            path: "/manageresource/subject",
            element: <Subject/>,
          },
        ],
      },
      {
        path: "/managetimetable",
        element: (
          <CoordinatorProtected>
            <ManageTimetable />
          </CoordinatorProtected>
        ),
      },
      {
        path: "/classtimetable",
        element: (
          <FacultyProtected>
            <Classess />
          </FacultyProtected>
        ),
      },
      {
        path: "/classtimetable/:ClassId",
        element: <ClassTimetable />,
      },
      {
        path: "/facultytimetable",
        element: (
          <AdminProtected>
            <Faculties />
          </AdminProtected>
        ),
      },
      {
        path: "/facultytimetable/:FacultyId",
        element: <FacultyTimetable />,
      },
      {
        path: "/classroomtimetable",
        element: (
          <FacultyProtected>
            <Classrooms />
          </FacultyProtected>
        ),
      },
      {
        path: "/classroomtimetable/:ClassroomId",
        element: (
          <FacultyProtected>
            <ClassroomTimetable />
          </FacultyProtected>
        ),
      },
      {
        path: "/currentlaboccupancy",
        element: (
          <FacultyProtected>
            <CurrentLabOccupancy />
          </FacultyProtected>
        ),
      },
      {
        path: "/currentfacultyavailability",
        element: (
          <FacultyProtected>
            <CurrentFacultyAvailability />
          </FacultyProtected>
        ),
      },

      {
        index: true,
        element: <Navigate to="login" />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
