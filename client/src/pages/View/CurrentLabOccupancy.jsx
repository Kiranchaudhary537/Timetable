import cx from "classnames";
import { Link } from "react-router-dom";

const Data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
];

export default function CurrentLabOccupancy() {
  const width = Math.floor(window.innerWidth / 15);
  
  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3  gap-8 auto-cols-fr	">
      {Data.map((e) => {
        return (
          <div className="flex justify-center">
            <div
              className={`block max-w-sm rounded-lg bg-white p-6 shadow-lg ${
                true==true ? "dark:bg-lime-700" : "dark:bg-red-700"
              }`}
            >
              <div className="flex flex-row flex-nowrap m-3 ">
                <div className="mx-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    I.T.
                  </h5>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    Lab NO :
                  </h5>
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {e.id}
                  </h5>
                </div>
                <div>
                  <svg
                    width={width}
                    height={width}
                    fill="#ffffff"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 511.997 511.997"
                    xml:space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M474.485,23.06H37.515C16.829,23.06,0,39.89,0,60.574v245.747v30.417v44.701c0,20.685,16.829,37.515,37.515,37.515 h134.504l-5.733,39.566h-28.914v30.417h24.506h188.241h24.506V458.52h-28.914l-5.733-39.566h134.504 c20.686,0,37.514-16.83,37.514-37.515v-44.701v-30.417V60.574C512,39.889,495.17,23.06,474.485,23.06z M197.02,458.52 l5.733-39.566h106.494l5.733,39.566H197.02z M481.583,381.439c0,3.913-3.184,7.097-7.097,7.097H335.574h-159.15H37.515 c-3.914,0-7.097-3.185-7.097-7.097v-44.701h451.166V381.439z M481.583,306.322H30.417V60.574c0-3.913,3.184-7.097,7.097-7.097 h436.971c3.914,0,7.097,3.185,7.097,7.097V306.322z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <rect
                            x="235.054"
                            y="347.434"
                            width="41.895"
                            height="30.417"
                          ></rect>{" "}
                        </g>{" "}
                      </g>{" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M256,66.763L128.477,203.888h65.317v84.05h124.411v-84.05h65.317L256,66.763z M287.788,173.471v84.05h-63.577v-84.05 h-25.909L256,111.429l57.698,62.042H287.788z"></path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}