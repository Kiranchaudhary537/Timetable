import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import SideBar from "./SideBar";

const headerTitles = {
  "/dashboard": "Dashboard",
  "/classtimetable": "Class Timetable",
  "/facultytimetable": "Faculty Timetable",
  "/classroomtimetable": "Classroom & Lab Timetable",
  "/currentlaboccupancy": "Current Lab occupancy",
  "/currentfacultyavailability": "Current Faculty Availability",
  "/managetimetable": "Manage Timetable",
  "/manageresource": "Manage Resource",
  "/manageresource/class": "Manage Resource",
  "/manageresource/faculty": "Manage Resource",
  "/manageresource/timeslot": "Manage Resource",
  "/manageresource/subject": "Manage Resource",
  "/manageresource/classroom": "Manage Resource",
};
export default function Layout() {
  const location = useLocation();
  const [headerTitle, setHeaderTitle] = useState(headerTitles["/dashboard"]);

  useEffect(() => {
    const path = Object.keys(headerTitles).find((p) =>
      location.pathname.startsWith(p)
    );
    if (path) {
      setHeaderTitle(headerTitles[path]);
    } else {
      setHeaderTitle(headerTitles["/dashboard"]);
    }
  }, [location]);
  return (
    <>
      <SideBar setheaderTitle={setHeaderTitle} />
      <main className="sm:ml-64">
        <Header headerTitle={headerTitle} />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
