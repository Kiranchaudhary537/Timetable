import cx from "classnames";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AXIOS from "../../api/AXIOS";

const Data = [
  {
    id: 1,
    semester: "6",
    division: "h",
    department: "IT",
  },
  {
    id: 2,
    semester: "6",
    division: "h",
    department: "IT",
  },
  {
    id: 3,
    semester: "6",
    division: "h",
    department: "IT",
  },
];
export default function Classess() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const width = Math.floor(window.innerWidth / 20);

  const [data, setData] = useState([]);

  useEffect(() => {
    AXIOS.get("/v1/getclasstimetable").then((res) => {
      setData(res.data.message);
    });
    console.log(data);
  }, []);

  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-cols-fr	">
      {data.map((e) => {
        return e.semester != "" && e.division != "" ? (
          <Link to={`${e._id}`}>
            <div className="flex justify-center">
              <div
                className="block max-w-sm rounded-lg bg-white p-6 shadow-lg"
                style={{
                  backgroundColor: `rgb(${randomBetween(
                    10,
                    240
                  )},${randomBetween(10, 240)},${randomBetween(10, 240)})`,
                }}
              >
                <div className="flex flex-row flex-nowrap m-3 ">
                  <div className="mx-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      I.T.
                    </h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Sem-{e.semester}
                    </h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Divison-{e.division}
                    </h5>
                  </div>
                  <div>
                    <svg
                      fill="#ffffff"
                      width={width}
                      height={width}
                      viewBox="0 0 19.00 19.00"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cf-icon-svg min-w-fit min-h-fit"
                      transform="rotate(0)"
                      stroke="#ffffff"
                      strokeWidth="0.00019"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="0.038"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path d="M16.141 7.905c.24.102.24.269 0 .37l-7.204 3.058a1.288 1.288 0 0 1-.874 0L.859 8.276c-.24-.102-.24-.27 0-.371l7.204-3.058a1.287 1.287 0 0 1 .874 0zm-6.833 4.303 3.983-1.69v2.081c0 1.394-2.145 2.524-4.791 2.524s-4.79-1.13-4.79-2.524v-2.082l3.982 1.69a2.226 2.226 0 0 0 1.616 0zm4.94 1.677h1.642v-1.091a.822.822 0 1 0-1.643 0zm.82-3.603a.554.554 0 1 0-.553-.554.554.554 0 0 0 .554.554zm0 1.415a.554.554 0 1 0-.553-.555.554.554 0 0 0 .554.555z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <></>
        );
      })}
    </div>
  );
}
