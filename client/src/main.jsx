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
import Dashboard from "./pages/Dashboard";
import Class from "./pages/Manage/Class";
import Faculty from "./pages/Manage/Faculty";
import ManageResource from "./pages/Manage/ManageResource";
import ManageTimetable from "./pages/Manage/ManageTimetable";
import ClassroomTimetable from "./pages/View/ClassroomTimetable";
import ClassTimetable from "./pages/View/ClassTimetable";
import CurrentFacultyAvailability from "./pages/View/CurrentFacultyAvailibility";
import CurrentLabOccupancy from "./pages/View/CurrentLabOccupancy";
import FacultyTimetable from "./pages/View/FacultyTimetable";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/manageresource",
        element: <ManageResource />,

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
            element: <Faculty />,
          },
          {
            path: "/manageresource/timeslot",
            element: <Faculty />,
          },
          {
            path: "/manageresource/subject",
            element: <Faculty />,
          },
        ],
      },
      {
        path: "/managetimetable",
        element: <ManageTimetable />,
      },
      {
        path: "/classtimetable",
        element: <ClassTimetable />,
      },
      {
        path: "/facultytimetable",
        element: <FacultyTimetable />,
      },
      {
        path: "/classroomtimetable",
        element: <ClassroomTimetable />,
      },
      {
        path: "/currentlaboccupancy",
        element: <CurrentLabOccupancy />,
      },
      {
        path: "/currentfacultyavailability",
        element: <CurrentFacultyAvailability />,
      },
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route path="classtimetable" element={<ClassTimetable />} />
//           <Route path="manageresource" element={<ManageResource />}>
//             <Route index element={<Class />} />
//             <Route path="class" index element={<Class />} />
//             <Route path="faculty" index element={<Faculty />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
