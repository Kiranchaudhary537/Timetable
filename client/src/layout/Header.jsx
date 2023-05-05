import React, { useEffect, useState } from "react";
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineUserAdd,
} from "react-icons/ai";
import AXIOS from "../api/AXIOS";

const RequestModal = ({ showModal, setShowModal }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    AXIOS.get("/v1/requestforfaculty").then((e) => {
      setData(e.data);
      console.log(e.data);
    });
  }, [showModal]);

  const handleDelete = (email) => {
    AXIOS.delete(`/v1/requestforfaculty/${email}`)
      .then((e) => {
        alert("Deleted");
        setShowModal(false);
      })
      .catch(() => {
        alert("Failed to delete");
      });
  };

  const handleSubmit = (email) => {
    AXIOS.post("/v1/requestforfaculty/updaterole", { email: email })
      .then((e) => {
        alert("Updated user role");
        AXIOS.delete(`/v1/requestforfaculty/${email}`).then((e) => {
          alert("Deleted");
          setShowModal(false);
        });
      })
      .catch(() => {
        alert("Failed to delete");
      });
  };
  return (
    <div
      className={`fixed border inset-0 z-10 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-75 transition-opacity ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className=" top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="w-full max-w-lg mx-auto rounded-lg shadow-lg bg-white">
          <div className="">
            <div className="px-6 py-4 flex justify-between items-center">
              <h3 className="text-3xl font-semibold text-gray-900">
                Request for faculty role
              </h3>
            </div>
            <hr className="border-gray-300" />
            <div className="px-6 py-4">
              {data?.map((e, i) => {
                return (
                  <div className="flex flex-row justify-between mx-1">
                    <p
                      key={i}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      {e.email}
                    </p>
                    <div className="mx-1 flex flex-row">
                      <AiOutlineCheckCircle
                        className="mx-1"
                        size={24}
                        color="#333"
                        onClick={() => {
                          handleSubmit(e.email);
                        }}
                      />
                      <AiOutlineCloseCircle
                        className="mx-1"
                        size={24}
                        color="#333"
                        onClick={() => {
                          handleDelete(e.email);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="px-6 py-4 flex justify-end">
            <button
              className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-gray-700 transition ease-in-out duration-150"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Header({ headerTitle }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <header>
        <div className="flex items-center justify-between h-36 mx-12 mb-2 rounded  ">
          {/* <p className="text-2xl text-gray-400 dark:text-gray-500">header</p> */}
          <h1 className="text-3xl">{headerTitle}</h1>
          <div>
            <ul className=" flex flex-row">
              <li className="m-2 mx-4">
                <AiOutlineUserAdd
                  className="mx-1"
                  size={24}
                  color="#333"
                  onClick={() => setShowModal(true)}
                />
                {/* <div
                 
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
                </div> */}
              </li>
              {/* <li className="m-2 mx-4">
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
              </li> */}
            </ul>
          </div>
        </div>
        <RequestModal showModal={showModal} setShowModal={setShowModal} />
      </header>
    </>
  );
}
