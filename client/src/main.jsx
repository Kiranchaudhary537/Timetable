import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// const AdminProtected = ({ children }) => {
//   if (false) {
//     return <h1>your are not admin</h1>;
//   }
//   return children;
// };
// const CoordinatorProtected = ({ children }) => {
//   if (false) {
//     return <h1>your are not Coordinator</h1>;
//     //navigate to 404 page or not authorized page
//   }
//   return children;
// };
// const FacultyProtected = ({ children }) => {
//   if (false) {
//     return <h1>your are not Faculty</h1>;
//   }
//   return children;
// };

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Register />,
//   },
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/manageresource",
//         element: <ManageResource />,

//         children: [
//           {
//             index: true,
//             element: <Navigate to="class" />,
//           },
//           {
//             path: "/manageresource/class",
//             element: <Class />,
//           },
//           {
//             path: "/manageresource/faculty",
//             element: <Faculty />,
//           },
//           {
//             path: "/manageresource/classroom",
//             element: <Classroom />,
//           },
//           {
//             path: "/manageresource/timeslot",
//             element: <Timeslots />,
//           },
//           {
//             path: "/manageresource/subject",
//             element: <Subject />,
//           },
//         ],
//       },
//       {
//         path: "/managetimetable",
//         element: <ManageTimetable />,
//       },
//       {
//         path: "/classtimetable",
//         element: <Classess />,
//       },
//       {
//         path: "/classtimetable/:ClassId",
//         element: <ClassTimetable />,
//       },
//       {
//         path: "/facultytimetable",
//         element: <Faculties />,
//       },
//       {
//         path: "/facultytimetable/:FacultyId",
//         element: <FacultyTimetable />,
//       },
//       {
//         path: "/classroomtimetable",
//         element: <Classrooms />,
//       },
//       {
//         path: "/classroomtimetable/:ClassroomId",
//         element: <ClassroomTimetable />,
//       },
//       {
//         path: "/currentlaboccupancy",
//         element: <CurrentLabOccupancy />,
//       },
//       {
//         path: "/currentfacultyavailability",
//         element: <CurrentFacultyAvailability />,
//       },

//       {
//         index: true,
//         element: <Navigate to="login" />,
//       },

//       {
//         path: "/dashboard",
//         element: <Dashboard />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
