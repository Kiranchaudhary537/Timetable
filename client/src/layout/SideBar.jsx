import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { ImClock } from "react-icons/im";
import { TbCalendarTime } from "react-icons/tb";
import { FiPieChart } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function SideBar({ setHeaderTitle }) {
  const navigate = useNavigate();
  const role = Cookies.get("role");
  console.log(role);

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-gray-700 border-r  dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <div className="mt-3 flex justify-between ">
            <img
              className="inline-block h-12 w-12 rounded-full ring-2 ring-white border"
              src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <h1 className="font-semibold text-justify mx-1 text-xl text-slate-900 ">
              Kiran Chaudhary
            </h1>
            <Link
              to="#"
              className="flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white-900  group-hover:text-gray-900 dark:group-hover:text-white "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
            </Link>
          </div>

          <ul className="space-y-3 mt-8">
            <span className="">View Timetable</span>
            <li>
              {/* <Link
                to="/dashboard"
                 className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
              > */}
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                    : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                }
              >
                <MdDashboard size={24} />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classtimetable"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                    : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                }
              >
                <SiGoogleclassroom size={24} />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Class Timetable
                </span>
              </NavLink>
            </li>
          </ul>
          {role == "FACULTY" || role == "COORDINATOR" || role == "ADMIN" ? (
            <ul>
              <li>
                <NavLink
                  to="/facultytimetable"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <BsPerson size={24} />
                  <span className="flex-1 flex-wrap ml-3 whitespace-nowrap">
                    Faculty Timetable
                  </span>
                </NavLink>
              </li>
              {/* <li>
                <NavLink

                  to="/classroomtimetable"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <RiComputerLine size={24} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Lab & Classroom <br /> Timetable
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/currentlaboccupancy"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <GoLocation size={24} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Current Lab
                    <br />
                    Occupancy
                  </span>
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/currentfacultyavailability"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <ImClock size={24} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Current Faculty
                    <br />
                    Availability
                  </span>
                </NavLink>
              </li>
            </ul>
          ) : (
            <></>
          )}
          {role == "COORDINATOR" ? (
            <ul className="space-y-3 mt-4">
              <span className="">Manage Timetable</span>
              <li>
                <NavLink
                  to="/managetimetable"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <TbCalendarTime size={24} />
                  <span className="ml-3">Manage Timetable</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manageresource"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center p-2 text-base font-normal  rounded-lg  bg-gray-700 text-white font-bold"
                      : "flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 hover:bg-gray-700"
                  }
                >
                  <FiPieChart size={24} />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Manage Resources
                  </span>
                </NavLink>
              </li>
            </ul>
          ) : (
            <></>
          )}
          <ul>
            <li>
              <NavLink
                // onClick={goToLogin()}
                to="/classtimetable"
                className="flex items-center p-2 text-red-500 text-base font-normal  rounded-lg  hover:text-red-500 hover:bg-red-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-red-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
