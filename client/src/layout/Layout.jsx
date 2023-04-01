import React,{useState} from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  const [headerTitle, setHeaderTitle] = useState("Dashboard");
  return (
    <>
      <SideBar setheaderTitle={setHeaderTitle} />
      <main className="sm:ml-64">
        <Header headertitle={headerTitle} />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
