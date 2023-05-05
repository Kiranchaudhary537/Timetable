import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { setCSVToTimetable } from "../../../features/timetable/timetableSlice";
import { updateTimeslot } from "../../../features/timetable/timeslotSlice";

const getDayIndex = (day) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDays.findIndex((e) => {
    return e == day;
  });
};

function findTimeslotId(d, timeslots) {
  let f = -1,
    flag = true;

  for (let i = 0; i < timeslots.length; i++) {
    const timeslot = timeslots[i];
    if (timeslot.timeslot == d.TIMESLOT) {
      f = timeslot.id;
      break;
    } else if (timeslot.timeslot.trim() == "" && flag == true) {
      f = timeslot.id;
      flag = false;
    }
  }

  // If no timeslot is available, return -1 or throw an error.
  return f;
}

// const updateTimeslots = (id, timeslot, setTimeslots) => {
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   setTimeslots((prevTimeslots) => {
//     return prevTimeslots.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           timeslot: timeslot,
//         };
//       }
//       return item;
//     });
//   });
//   // resolve();
//   //   }, 1000); // Simulate asynchronous operation
//   // });
// };

export default function CSVManage() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [id, setId] = useState();
  const [timeslot, setTimeslot] = useState();

  const [timeslots, setTimeslots] = useState([
    {
      id: 0,
      timeslot: "Days",
    },
    {
      id: 1,
      timeslot: "",
    },
    {
      id: 2,
      timeslot: "",
    },
    {
      id: 3,
      timeslot: "",
    },
    {
      id: 4,
      timeslot: "",
    },
    {
      id: 5,
      timeslot: "",
    },
    {
      id: 6,
      timeslot: "",
    },
    {
      id: 7,
      timeslot: "",
    },
    {
      id: 8,
      timeslot: "",
    },
  ]);
  useEffect(() => {
    console.log(timeslots);
  }, [timeslots]);
  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        setData(results);
      },
    });
  };


  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={changeHandler}
        accept=".csv"
        style={{ display: "block", margin: "10px auto" }}
      />
    </div>
  );
}

// setTimetable((prevState) => {
//   const updatedDay = prevState.days.find((e) => e.day === d.DAY);

//   if (!updatedDay) {
//     return prevState;
//   }
//   let slot = timeslots.find((e) => e.timeslot == d.TIMESLOT);

//   if (typeof slot === "undefined") {
//     slot = updatedDay.timeslots.find(
//       (e) => e.Faculty.trim() == "" && e.Subject.trim() == ""
//     );
//   }
//   if (typeof slot === "undefined") {
//     slot = { id: 0 };
//   }

//   const updatedSlot = updatedDay.timeslots[slot.id - 1];
//   console.log(updatedSlot);
//   if (!updatedSlot) {
//     return prevState;
//   }
//   const updatedSlotObj = {
//     ...updatedSlot,
//     Classroom: d.CLASSROOM,
//     Timeslot: d.TIMESLOT,
//     Type: d.TYPE,
//     Faculty: d.FACULTY,
//     Subject: d.SUBJECT,
//   };

//   const updatedDayObj = {
//     ...updatedDay,
//     timeslots: updatedDay.timeslots.map((s) =>
//       s.id == slot.id ? updatedSlotObj : s
//     ),
//   };

//   const updatedDays = prevState.days.map((e) =>
//     e.day == d.DAY ? updatedDayObj : e
//   );
//   return {
//     ...prevState,
//     semester: d.SEM,
//     division: d.DIVISION,
//     days: updatedDays,
//   };
// });
