import React from "react";
import { Outlet } from "react-router-dom";


export default function ManageLayout() {
  return (
    <>
      <div className="w-full">
        <Outlet />
      </div>
    </>
  );
}
