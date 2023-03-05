import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout() {
  return (
    <>
      <SideBar />
      <main className=" sm:ml-64">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}
