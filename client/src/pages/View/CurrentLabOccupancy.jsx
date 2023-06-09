import React, { useEffect, useState, useRef } from "react";
import AXIOS from "../../api/AXIOS";

function isCurrentTimeInTimeslot(timeslot) {
  const currentTime = new Date(); // Get the current time

  const [startTime, endTime] = timeslot.split(" TO "); // Split the timeslot into start and end times

  const start = new Date(currentTime.toDateString() + " " + startTime); // Create a Date object for the start time
  const end = new Date(currentTime.toDateString() + " " + endTime); // Create a Date object for the end time

  // Check if the current time is within the timeslot
  if (currentTime >= start && currentTime <= end) {
    return true;
  } else {
    return false;
  }
}

function Popover({ children, onClose, data }) {
  const [showPopover, setShowPopover] = useState(false);
  const [details, setDetails] = useState();
  const popoverRef = useRef(null);
  const childRef = useRef(null);

  console.log(data);
  6;
  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowPopover(false);
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Determine the position of the popover based on the clicked element
  function getPosition(element) {
    const rect = element?.getBoundingClientRect();

    const x = rect?.left + rect?.width / 2 - 100;
    const y = rect?.bottom + 10;

    return { x, y };
  }

  function getChildSize() {
    const childRect = childRef?.current?.getBoundingClientRect();
    const width = childRect?.width;
    const height = childRect?.height;
    return { width, height };
  }

  function renderPopover() {
    // const position = getPosition(children?.ref?.current);
    const { width, height } = getChildSize();
    const divStyle = {
      width: `${width}px`,
      // height: `${height}px`,
      marginLeft: "auto",
      marginRight: "auto",
    };

    return (
      <div
        className="absolute  bg-white shadow-lg rounded-lg mt-1 p-4 z-10"
        style={divStyle}
        ref={popoverRef}
      >
        {data?.view == false ? (
          <p className="text-xl text-green-500">Currently lab is empty</p>
        ) : (
          <div>
            <p className="text-xl text-red-500">Currently lab is occupied</p>
          </div>
        )}
      </div>
    );
  }

  // Render the clickable element and the popover (if visible)
  return (
    <div className="relative">
      <div
        className={`block border-2 max-w-sm rounded-lg bg-white  p-6 shadow-lg ${
          data?.view == false ? "dark:bg-lime-700" : "dark:bg-red-700"
        }`}
      >
        {React.cloneElement(children, {
          onClick: () => setShowPopover(true),
          ref: childRef,
        })}
      </div>
      {showPopover && renderPopover()}
    </div>
  );
}

export default function CurrentLabOccupancy() {
  const width = Math.floor(window.innerWidth / 20);
  const [activePopover, setActivePopover] = useState(null);
  const [data, setData] = useState([]);
  const [view, setView] = useState([]);
  const today = new Date();
  const dayIndex = (((today.getDay() - 1) % 7) + 7) % 7;

  useEffect(() => {
    AXIOS.get("/v1/getcurrentlabstatus")
      .then((res) => {
        setData(res.data.labs);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    const newView = [];
    data?.forEach((e) => {
      let f = true;
      const timeslot = e?.days[dayIndex]?.timeslots;
      timeslot?.forEach((slot) => {
        if (slot.Timeslot != "") {
          if (isCurrentTimeInTimeslot(slot.Timeslot) == true) {
            console.log(isCurrentTimeInTimeslot(slot.Timeslot));
            f = false;
          }
        }
      });
      if (f == true) {
        newView.push({ no: e.no, view: false });
      } else {
        newView.push({ no: e.no, view: true });
      }
    });

    const uniqueView = newView.filter(
      (v, i, a) => a.findIndex((t) => t.no == v.no) == i
    );
    setView(uniqueView);
  }, [data]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 auto-cols-fr	">
      {data?.map((e, index) => {
        const viewData = view.find((item) => item.no == e.no);
        return (
          <>
            <Popover
              key={index}
              data={viewData}
              onClose={() => setActivePopover(null)}
            >
              <div className="flex justify-between p-6 ">
                <div
                  className="flex 
                   flex-row flex-nowrap m-3 "
                >
                  <div className="mx-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      I.T.
                    </h5>
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                      Lab NO : {e.no}
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
                        <g>
                          <g>
                            <path d="M474.485,23.06H37.515C16.829,23.06,0,39.89,0,60.574v245.747v30.417v44.701c0,20.685,16.829,37.515,37.515,37.515 h134.504l-5.733,39.566h-28.914v30.417h24.506h188.241h24.506V458.52h-28.914l-5.733-39.566h134.504 c20.686,0,37.514-16.83,37.514-37.515v-44.701v-30.417V60.574C512,39.889,495.17,23.06,474.485,23.06z M197.02,458.52 l5.733-39.566h106.494l5.733,39.566H197.02z M481.583,381.439c0,3.913-3.184,7.097-7.097,7.097H335.574h-159.15H37.515 c-3.914,0-7.097-3.185-7.097-7.097v-44.701h451.166V381.439z M481.583,306.322H30.417V60.574c0-3.913,3.184-7.097,7.097-7.097 h436.971c3.914,0,7.097,3.185,7.097,7.097V306.322z"></path>
                          </g>
                        </g>
                        <g>
                          <g>
                            <rect
                              x="235.054"
                              y="347.434"
                              width="41.895"
                              height="30.417"
                            ></rect>
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M256,66.763L128.477,203.888h65.317v84.05h124.411v-84.05h65.317L256,66.763z M287.788,173.471v84.05h-63.577v-84.05 h-25.909L256,111.429l57.698,62.042H287.788z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Popover>
          </>
        );
      })}
    </div>
  );
}
