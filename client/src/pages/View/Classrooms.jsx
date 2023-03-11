import React, { useState, useEffect } from "react";
import axios from "axios";
import cx from "classnames";
import { Link } from "react-router-dom";
const Data = [
  {
    id: 1,
    semester: 6,
    division: "H",
  },
  {
    id: 1,
    semester: 6,
    division: "I",
  },
  {
    id: 1,
    semester: 4,
    division: "H",
  },
  {
    id: 1,
    semester: 6,
    division: "H",
  },
  {
    id: 1,
    semester: 6,
    division: "I",
  },
  {
    id: 1,
    semester: 4,
    division: "H",
  },
];
export default function Classrooms() {
  const width = Math.floor(window.innerWidth / 15);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/v1/getclassroomtimetable").then((res) => {
      setData(res.data.message);
    });
    console.log(data);
  }, []);

  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-cols-fr	">
      {data.map((e) => {
        return (
          <Link to={`${e._id}`}>
            <div className="flex justify-center">
              <div className="block max-w-sm rounded-lg bg-white p-6 shadow-lg dark:bg-lime-700">
                <div className="flex flex-row flex-nowrap m-3 ">
                  <div className="mx-6">
                    {/* <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      I.T.
                    </h5> */}
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Classroom
                    </h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      NO: {e.no}
                    </h5>
                  </div>
                  <div>
                    <svg
                      fill="#ffffff"
                      width={width}
                      height={width}
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="Locker">
                          <path d="M45.9957,452.891A13.11,13.11,0,0,0,59.1058,466h393.782a13.1083,13.1083,0,0,0,13.1079-13.109V426.6271h-420Z"></path>
                          <path d="M343.5043,111.6133v288.75h122.5v-288.75Zm50.3125,170.625c-.2713,17.2468-25.9745,17.2628-26.25,0v-35c.2734-17.2458,25.9765-17.2619,26.25.001Zm35-74.375h-43.75c-17.2437-.2714-17.265-25.9745,0-26.25h43.75C446.06,181.8846,446.0818,207.59,428.8168,207.8633Zm0-43.75h-43.75c-17.2437-.2714-17.265-25.9745,0-26.25h43.75C446.06,138.1346,446.0818,163.84,428.8168,164.1133Z"></path>
                          <path d="M317.2543,400.3633v-288.75h-122.5v288.75Zm-80.9375-262.5h43.75c17.2436.2713,17.265,25.9765,0,26.25h-43.75C219.0731,163.8419,219.0518,138.1388,236.3168,137.8633Zm0,43.75h43.75c17.2436.2713,17.265,25.9765,0,26.25h-43.75C219.0731,207.5919,219.0518,181.8888,236.3168,181.6133Zm-17.5,65.625c.2734-17.2458,25.9765-17.2619,26.25.001v34.999c-.2713,17.2468-25.9745,17.2628-26.25,0Z"></path>
                          <path d="M168.5043,400.3633v-288.75h-122.5v288.75Zm-80.9375-262.5h43.75c17.2436.2713,17.265,25.9765,0,26.25h-43.75C70.3231,163.8419,70.3018,138.1388,87.5668,137.8633Zm0,43.75h43.75c17.2436.2713,17.265,25.9765,0,26.25h-43.75C70.3231,207.5919,70.3018,181.8888,87.5668,181.6133Zm-17.5,65.625c.2734-17.2458,25.9765-17.2619,26.25.001v34.999c-.2713,17.2468-25.9745,17.2628-26.25,0Z"></path>
                          <path d="M465.9957,59.109A13.1083,13.1083,0,0,0,452.8878,46H59.1058a13.11,13.11,0,0,0-13.11,13.109V85.3771h420Z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
