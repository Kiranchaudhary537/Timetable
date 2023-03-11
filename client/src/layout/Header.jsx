import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header >
        <div className="flex items-center justify-between h-36 mx-12 mb-2 rounded  ">
          {/* <p className="text-2xl text-gray-400 dark:text-gray-500">header</p> */}
          <h1 className="text-3xl">Dashboard</h1>
          <div>
            <ul className=" flex flex-row">
              <li className="m-2 mx-4">
                <Link
                  to="#"
                  className="flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                </Link>
              </li>
              <li className="m-2 mx-4">
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal  rounded-lg  hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
