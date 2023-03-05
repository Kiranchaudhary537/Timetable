import React from "react";
import { Link } from "react-router-dom";
import ManageLayout from "./ManageLayout";

const ManageHeader = () => {
  return (
    <>
      <div className="border-b">
        <ul className="ml-4 flex flex-row justify-start">
          <li className="mx-6">
            <Link to="/manageresource/class">
              <h2 className="text-2xl">Class</h2>
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/manageresource/faculty">
              <h2 className="text-2xl">Faculty</h2>
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/manageresource/timeslot">
              <h2 className="text-2xl">TimeSlot</h2>
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/manageresource/subject">
              <h2 className="text-2xl">Subject</h2>
            </Link>
          </li>
          <li className="mx-6">
            <Link to="/manageresource/classroom">
              <h2 className="text-2xl">Classroom & Lab</h2>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default function ManageResource() {
  return (
    <>
      <div className="w-full">
        <ManageHeader />
        <ManageLayout />
      </div>
    </>
  );
}
