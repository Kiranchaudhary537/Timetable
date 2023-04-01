import React, { useState } from "react";
import Papa from "papaparse";

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

export default function CSVManage({ timetable, timeslots, setTimetable }) {
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        // Iterating data to get column name and their values
        console.log(results.data);
        results.data.map((d) => {
          
          setTimetable((prevState) => {
            const updatedDay = prevState.days.find((e) => e.day === d.DAY);

            if (!updatedDay) {
              return prevState;
            }
            let slot = timeslots.find((e) => e.timeslot == d.TIMESLOT);

            if (typeof slot === "undefined") {
              slot = updatedDay.timeslots.find(
                (e) => e.Faculty.trim() == "" && e.Subject.trim() == ""
              );
            }
            if (typeof slot === "undefined") {
              slot = { id: 0 };
            }

            const updatedSlot = updatedDay.timeslots[slot.id - 1];
            console.log(updatedSlot);
            if (!updatedSlot) {
              return prevState;
            }
            const updatedSlotObj = {
              ...updatedSlot,
              Classroom: d.CLASSROOM,
              Timeslot: d.TIMESLOT,
              Type: d.TYPE,
              Faculty: d.FACULTY,
              Subject: d.SUBJECT,
            };

            const updatedDayObj = {
              ...updatedDay,
              timeslots: updatedDay.timeslots.map((s) =>
                s.id == slot.id ? updatedSlotObj : s
              ),
            };

            const updatedDays = prevState.days.map((e) =>
              e.day == d.DAY ? updatedDayObj : e
            );
            return {
              ...prevState,
              semester: d.SEM,
              division: d.DIVISION,
              days: updatedDays,
            };
          });
        });
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
