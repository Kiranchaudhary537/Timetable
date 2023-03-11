import React, { useState } from "react";
import { Table, Column, HeaderCell, Cell } from "rsuite-table";
import "rsuite-table/dist/css/rsuite-table.css";
import { useTable } from "react-table";
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
const Data2 = [
  {
    id: 1,
    day: "Monday",
    slots: [
      {
        id: 1,
        sub: "L.T",
      },
      {
        id: 2,
        sub: "S.E",
      },
      {
        id: 3,
        sub: "AOS",
      },
      {
        id: 4,
        sub: "AOS",
      },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    slots: [
      {
        id: 1,
        sub: "AOS",
      },
      {
        id: 2,
        sub: "AOS",
      },
      {
        id: 3,
        sub: "AOS",
      },
      {
        id: 4,
        sub: "AOS",
      },
    ],
  },
  {},
];
function Modal({ setHandleChange }) {
  const [showModal, setShowModal] = useState(false);
  const [timeslot, setTimeSlot] = useState("Set Timeslot");
  const handleSave = () => {
    setTimeSlot("8:30 A.M To 9:30 A.M");
    setShowModal(false);
  };
  return (
    <>
      <button className="" type="button" onClick={() => setShowModal(true)}>
        {timeslot}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative p-6 flex-auto">{}</div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-emerald-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSave()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default function ManageTimetable() {
  const [slots, setSlots] = useState([
    {
      id: 0,
      timeslots: "Days ",
    },

    {
      id: 1,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 3,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 3,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 4,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 5,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 6,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 7,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
    {
      id: 8,
      timeslots: "8:30 A.M. TO 9:30 A.M.",
    },
  ]);
  const handleSlots = ({ value }) => {
    console.log("working");
    console.log(value);
  };

  return (
    <>
      <div className="flex justify-center h-screen w-full">
        under working
        {/* <div className="w-3/4 mt-12 m-2">
          <table>
            <thead></thead>
            <tbody></tbody>
          </table>
          <div>
            <button></button>
          </div>
        </div>
        <div className="w-1/4 border-l">
          
        </div> */}
      </div>
    </>
  );
}

// const [timetable, setTimetable] = useState({
//     class: "I",
//     division: "H",
//     days: [
//       {
//         day: "Monday",
//         slots: [
//           {
//             id: 1,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//       {
//         day: "Tuesday",
//         slots: [
//           {
//             id: 1,
//             timeslot: "8:30 A.M to 9:30 P.M",
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//       {
//         day: "Wensday",
//         slots: [
//           {
//             id: 1,
//             timeslot: "8:30 A.M to 9:30 P.M",
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//       {
//         day: "Thursday",
//         slots: [
//           {
//             id: 1,
//             timeslot: "8:30 A.M to 9:30 P.M",
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//       {
//         day: "Friday",
//         slots: [
//           {
//             id: 1,
//             timeslot: "8:30 A.M to 9:30 P.M",
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//       {
//         day: "Saturn",
//         slots: [
//           {
//             id: 1,
//             timeslot: "8:30 A.M to 9:30 P.M",
//             name: "",
//             subject: "",
//           },
//           {
//             id: 2,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 3,
//             name: "",
//             subject: "",
//           },
//           {
//             id: 4,
//             name: "",
//             subject: "",
//           },
//         ],
//       },
//     ],
//   });
//   const [slots, setSlots] = useState([
//     {
//       id: 1,
//       timeslots: "Days ",
//     },

//     {
//       id: 1,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },

//     {
//       id: 1,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },

//     {
//       id: 2,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 3,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 3,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 4,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 5,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 6,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 7,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//     {
//       id: 8,
//       timeslots: "8:30 A.M. TO 9:30 A.M.",
//     },
//   ]);
