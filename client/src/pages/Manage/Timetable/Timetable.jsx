import axios from "axios";
import React, { useEffect, useState } from "react";
import CSVManage from "./CSVManage";
import { ClassroomModal, TimeslotsModal } from "./Model";
import { UpdatedClassroomState } from "../../../Utils/UpdatedClassroomState";
import { ClearTimetableFields } from "../../../Utils/UpdateTimetable";
import { updateFaculty, updateSubject } from "../../../Utils/UpdateSlot";

// function updateSubject(day, slotId, newSlotData, setTimetable) {
//   console.log("newslot", newSlotData);
//   setTimetable((prevState) => {
//     const updatedDay = prevState.days.find((d) => d.day === day);

//     if (!updatedDay) {
//       return prevState;
//     }

//     const updatedSlot = updatedDay.timeslots[slotId - 1];
//     if (!updatedSlot) {
//       return prevState;
//     }
//     const updatedSlotObj = {
//       ...updatedSlot,
//       Subject: newSlotData,
//     };

//     const updatedDayObj = {
//       ...updatedDay,
//       timeslots: updatedDay.timeslots.map((s) =>
//         s.id === slotId ? updatedSlotObj : s
//       ),
//     };

//     const updatedDays = prevState.days.map((d) =>
//       d.day === day ? updatedDayObj : d
//     );
//     return { ...prevState, days: updatedDays };
//   });
// }

// function updateFaculty(
//   day,
//   slotId,
//   classroom,
//   timeslot,
//   type,
//   newSlotData,
//   setTimetable
// ) {
//   setTimetable((prevState) => {
//     const updatedDay = prevState.days.find((d) => d.day === day);

//     if (!updatedDay) {
//       return prevState;
//     }

//     const updatedSlot = updatedDay.timeslots[slotId - 1];
//     if (!updatedSlot) {
//       return prevState;
//     }
//     const updatedSlotObj = {
//       ...updatedSlot,
//       Classroom: classroom,
//       Timeslot: timeslot,
//       Type: type,
//       Faculty: newSlotData,
//     };

//     const updatedDayObj = {
//       ...updatedDay,
//       timeslots: updatedDay.timeslots.map((s) =>
//         s.id === slotId ? updatedSlotObj : s
//       ),
//     };

//     const updatedDays = prevState.days.map((d) =>
//       d.day === day ? updatedDayObj : d
//     );
//     return { ...prevState, days: updatedDays };
//   });
// }

const convertTime = (timeStr) => {
  const [time, modifier] = timeStr.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM") {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours}:${minutes}`;
};

const checkCurrent = (starttime, endtime) => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();

  starttime = convertTime(starttime);
  endtime = convertTime(endtime);
  let [shours, sminutes] = starttime.split(":");
  let [ehours, eminutes] = endtime.split(":");

  if (shours < hh && ehours > hh) {
    return true;
  } else if (shours == hh && sminutes <= mm) {
    return true;
  } else if (ehours == hh && eminutes > mm) {
    return true;
  } else {
    return false;
  }
};
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

// function updateFacultyTimetable(timetable, timeslots, setFaculty) {
//   timetable.days.map((e1) => {
//     e1.timeslots.map(async (e2) => {
//       if (e2.Faculty != "") {
//         await setFaculty((prevState) => {
//           let index = prevState.findIndex((element) => {
//             console.log(element.name + e2.Faculty);
//             return element.name == e2.Faculty;
//           });

//           if (index >= 0) {
//             const updatedName = [...prevState];
//             const updatedDay = updatedName[index].days.find(
//               (d) => d.day == e1.day
//             );

//             if (!updatedDay) {
//               return prevState;
//             }
//             const updatedSlot = updatedDay.timeslots[e2.id - 1];
//             if (!updatedSlot) {
//               return prevState;
//             }

//             const updatedSlotObj = {
//               ...updatedSlot,
//               id: e2.id,
//               Timeslot: e2.id,
//               Semester: timetable.semester,
//               Division: timetable.division,
//               Classroom: e2.Classroom,
//               Subject: e2.Subject,
//             };

//             const updatedDayObj = {
//               ...updatedDay,
//               timeslots: updatedDay.timeslots.map((s) =>
//                 s.Timeslot == e2.id ? updatedSlotObj : s
//               ),
//             };
//             console.log(updatedDayObj);
//             const updatedDays = updatedName[index].days.map((d) =>
//               d.day == e1.day ? updatedDayObj : d
//             );

//             updatedName[index].days = updatedDays;
//             console.log(updatedName);
//             return updatedName;
//           } else {
//             let faculty = {
//               name: e2.Faculty,
//               days: prevState[0].days,
//             };
//             const updatedDay = faculty.days.find((d) => d.day == e1.day);

//             if (!updatedDay) {
//               return prevState;
//             }
//             const updatedSlot = updatedDay.timeslots[e2.id - 1];
//             if (!updatedSlot) {
//               return prevState;
//             }

//             const updatedSlotObj = {
//               id: e2.id,
//               Timeslot: e2.id,
//               Semester: timetable.semester,
//               Division: timetable.division,
//               Classroom: e2.Classroom,
//               Subject: e2.Subject,
//             };

//             const updatedDayObj = {
//               ...updatedDay,
//               timeslots: updatedDay.timeslots.map((s) =>
//                 s.Timeslot == e2.id ? updatedSlotObj : s
//               ),
//             };

//             const updatedDays = faculty.days.map((d) =>
//               d.day == e1.day ? updatedDayObj : d
//             );
//             faculty.days = updatedDays;
//             console.log([...prevState, faculty]);
//             return [...prevState, faculty];
//           }
//         });
//       }
//     });
//   });
// }


function updateFacultyState(timetable, faculty, setFaculty, day, slot, i, j) {
    setFaculty((prevState) => {
      const index = prevState.findIndex((item) => item.name == slot.Faculty);

      if (index > 0) {
        let updatedFaculty = [...prevState];
        let updatedDays = updatedFaculty[index];
        let updatedDay = updatedDays.days[i];
        console.log(updatedDay.day);
        let updatedTimeslot = updatedDay.timeslots[j];
        updatedTimeslot.Subject = slot.Subject;
        updatedTimeslot.Semester = timetable.semester;
        updatedTimeslot.Division = timetable.division;
        updatedDay.timeslots[j] = updatedTimeslot;
        updatedDays.days[i] = updatedDay;
        updatedFaculty[index] = updatedDays;
        console.log(updatedFaculty[index]);
        // setFaculty(() => {
        return updatedFaculty;
        // });
      } else {
        let updatedFaculty = {
          name: slot.Faculty,
          days: faculty[0].days,
        };

        let updatedDay = updatedFaculty.days[i];
        console.log(updatedDay.day);
        let updatedTimeslot = updatedDay.timeslots[j];
        updatedTimeslot.Subject = slot.Subject;
        updatedTimeslot.Semester = timetable.semester;
        updatedTimeslot.Division = timetable.division;
        updatedDay.timeslots[j] = updatedTimeslot;
        updatedFaculty.days[i] = updatedDay;

        // setFaculty((prevState) => {

        return [...prevState, updatedFaculty];
        // });
      }
    });
}
function ClearFacultyState(timetable, setFaculty, day, slot, i, j) {
  setFaculty((prevState) => {
    console.log(prevState);
    const index = prevState.findIndex((item) => item.name == slot.Faculty);
    console.log(index);
    if (index > 0) {
      let updatedFaculty = [...prevState];
      let updatedTimeslot = updatedFaculty[index].days[i].timeslots[j];
      if (
        updatedTimeslot.Semester == timetable.semester &&
        updatedTimeslot.Division == timetable.division
      ) {
        updatedTimeslot.Subject = "";
        updatedTimeslot.Type = "";
        updatedTimeslot.Classroom = "";
        updatedTimeslot.Semester = "";
        updatedTimeslot.Division = "";
        updatedFaculty[index].days[i].timeslots[j] = updatedTimeslot;
      }
      return updatedFaculty;
    } else {
      return prevState;
    }
  });
}
function ClearFacultyTimetetable(timetable, setFaculty) {
  timetable.days.map((day, i) => {
    day.timeslots.map((slot, j) => {
      if (slot.Faculty.trim() != "") {
        ClearFacultyState(timetable, setFaculty, day, slot, i, j);
        setFaculty((prevState) => {
          console.log(prevState);
          return prevState;
        });
      }
    });
  });
}

function updateFacultyTimetable(timetable, faculty, setFaculty) {
  timetable.days.map((day, i) => {
    day.timeslots.map((slot, j) => {
      if (slot.Faculty.trim() != "") {
        updateFacultyState(timetable, faculty, setFaculty, day, slot, i, j);
        setFaculty((prevState) => {
          console.log(prevState);
          return prevState;
        });
      }
    });
  });
}

export default function ManageTimetable() {
  const [showTimeslotModal, setShowTimeslotModal] = useState({
    is: false,
    id: "",
  });
  const [showClassroomModal, setShowClassroomModal] = useState({
    is: false,
    id: "",
  });
  const [timeslots, setSlots] = useState([
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
  const [classroomno, setRoomNo] = useState([
    {
      id: 0,
      no: "Classroom/Lab no",
      type: "",
    },
    {
      id: 1,
      no: "",
      type: "",
    },
    {
      id: 2,
      no: "",
      type: "",
    },
    {
      id: 3,
      no: "",
      type: "",
    },
    {
      id: 4,
      no: "",
      type: "",
    },
    {
      id: 5,
      no: "",
      type: "",
    },
    {
      id: 6,
      no: "",
      type: "",
    },
    {
      id: 7,
      no: "",
      type: "",
    },
    {
      id: 8,
      no: "",
      type: "",
    },
  ]);
  const [timetable, setTimetable] = useState({
    _id: "",
    semester: "",
    division: "",
    days: [
      {
        day: "Monday",
        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
      {
        day: "Tuesday",
        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
      {
        day: "Wednesday",
        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
      {
        day: "Thursday",
        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
      {
        day: "Friday",
        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
      {
        day: "Saturday",

        timeslots: [
          {
            id: 1,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 2,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 3,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 4,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 5,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 6,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 7,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
          {
            id: 8,
            Timeslot: "",
            Faculty: "",
            Classroom: "",
            Type: "",
            Subject: "",
          },
        ],
      },
    ],
  });
  const [classroom, setClassroom] = useState([
    {
      no: "",
      type: "",
      days: [
        {
          day: "Monday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Tuesday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Wensday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Thursday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Friday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Saturday",
          timeslots: [
            {
              id: 1,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: "",
              Semester: "",
              Division: "",
              Faculty: "",
              Subject: "",
            },
          ],
        },
      ],
    },
  ]);
  const [faculty, setFaculty] = useState([
    {
      name: "",
      days: [
        {
          day: "Monday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Tuesday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Wensday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Thursday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Friday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
        {
          day: "Saturday",
          timeslots: [
            {
              id: 1,
              Timeslot: 1,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 2,
              Timeslot: 2,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 3,
              Timeslot: 3,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 4,
              Timeslot: 4,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 5,
              Timeslot: 5,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 6,
              Timeslot: 6,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 7,
              Timeslot: 7,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
            {
              id: 8,
              Timeslot: 8,
              Semester: "",
              Division: "",
              Type: "",
              Classroom: "",
              Subject: "",
            },
          ],
        },
      ],
    },
  ]);
  
  const [edit, setEdit] = useState({
    edit: false,
    day: "",
    id: "",
    timeslot: "",
    classroom: "",
    type: "",
  });
  const [availFaculty, setAvailFaculty] = useState([]);
  const [allFaculty, setAllFaculty] = useState([]);
  const [classInfo, setClassInfo] = useState(false);

  const handleSubmit = () => {
    updateFacultyTimetable(timetable, faculty, setFaculty);
    // UpdatedClassroomState(timetable, classroomno, setClassroom);

    axios
      .post("http://localhost:3000/v1/managetimetable/class", {
        timetable,
        classroomno,
        timeslots,
      })
      .then(alert("Timetable Updated"));
    console.log(faculty);
    axios
      .post("http://localhost:3000/v1/managetimetable/faculty", {
        faculty,
        timeslots,
      })
      .then((e) => {
        alert("Faculty Timetable Updated");
      });
  };

  useEffect(() => {
    ClearTimetableFields(setTimetable, setAvailFaculty);
    if (
      timetable.division.trim() != "" &&
      timetable.semester.trim() != "" &&
      classInfo == true
    ) {
      axios
        .get(
          `http://localhost:3000/v1/getclasstimetable/getclass/?semester=${timetable.semester}&division=${timetable.division}`
        )
        .then((res) => {
          if (res.data.message !== null) {
            setTimetable(res.data.message);
            setSlots(res.data.message.timeslots);
            setRoomNo(res.data.message.classroomno);
          }
        });
      axios
        .get("http://localhost:3000/v1/getfacultytimetable")
        .then((res) => {
          if (res.data.message.length != 0 && faculty.length == 1) {
            setFaculty([...faculty, ...res.data.message]);
            console.log(faculty);
          }
          console.log(faculty);
          let tempdata = new Set();
          res.data.message.map((e) => {
            tempdata.add(e.name);
          });
          setAllFaculty([]);
          tempdata.forEach((e) => {
            setAllFaculty((prev) => [...prev, e]);
          });
          setAvailFaculty(availFaculty);
        })
        .finally(() => {
          console.log("clear timetable");
          // ClearFacultyTimetetable(timetable, setFaculty);
          console.log(faculty);
        });
    }
  }, [classInfo]);

  useEffect(() => {
    const tempdata = new Set();
    const existempdata = new Set();
    availFaculty.map((e) => {
      tempdata.add(e);
    });
    faculty.map((f) => {
      console.log(f.name);
      if (typeof timeslots[edit.timeslot] != "undefined" && f.name != "") {
        if (timeslots[edit.timeslot].timeslot.trim() != "") {
          if (
            timeslots[edit.timeslot].id !=
            f.days[getDayIndex(edit.day)].timeslots[edit.timeslot - 1].Timeslot
          ) {
            tempdata.add(f.name);
          } else {
            if (
              (f.days[getDayIndex(edit.day)].timeslots[edit.timeslot - 1]
                .Semester == timetable.semester &&
                f.days[getDayIndex(edit.day)].timeslots[edit.timeslot - 1]
                  .Division == timetable.division) ||
              f.days[getDayIndex(edit.day)].timeslots[
                edit.timeslot - 1
              ].Semester.trim() == "" ||
              f.days[getDayIndex(edit.day)].timeslots[
                edit.timeslot - 1
              ].Division.trim() == ""
            ) {
              tempdata.add(f.name);
            } else {
              existempdata.add(f.name);
            }
          }
          existempdata.forEach((e) => {
            tempdata.delete(e);
          });
        }
      }
    });

    setAvailFaculty([]);
    tempdata.forEach((e) => {
      setAvailFaculty((prevData) => [...prevData, e]);
    });
  }, [edit.day, edit, edit.timeslot, edit.id]);

  const ClearTimetable = () => {
    axios
      .delete("http://localhost:3000/v1/managetimetable/class/" + timetable._id)
      .then((e) => {
        alert("Reload page for latest changes");
      });
  };

  // useEffect(() => {
  //   function handleKeyDown(event) {
  //     if (event.key === "Backspace") {
  //       console.log("backspace");
  //       updateFaculty(
  //         edit.day,
  //         edit.id,
  //         edit.classroom,
  //         edit.timeslot,
  //         edit.type,
  //         "",
  //         setTimetable
  //       );
  //       updateSubject(edit.day, edit.id, "", setTimetable);
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);
  return (
    <>
      <div className="w-4/12 min-w-96 p-4 gap-2 border shadow">
        <label className="px-2 text-xl  font-medium ">
          Select class and division
        </label>
        <div className="bg-white rounded-lg p-2">
          <div className="flex md:flex-row flex-column space-x-4">
            <select
              onChange={(e) => {
                setTimetable((prevState) => {
                  
                  if (e.target.value == "Select Class") {
                    return prevState;
                  }
                  setClassInfo(false);
                  prevState.semester = e.target.value;
                  return prevState;
                });
              }}
              id="semester"
              className="bg-gray-100 rounded-lg px-4 py-2"
            >
              <option>Select Class</option>
              <option>6</option>
              <option>4</option>
              <option>2</option>
            </select>
            <select
              id="divison"
              onChange={(e) => {
                setTimetable((prevState) => {
                  if (e.target.value == "Select Division") {
                    return prevState;
                  }
                  setClassInfo(false);
                  prevState.division = e.target.value;
                  return prevState;
                });
              }}
              className="bg-gray-100 rounded-lg px-4 py-2"
            >
              <option>Select Division</option>
              <option>H</option>
              <option>I</option>
              <option>J</option>
            </select>
            <button
              className="p-2 border bg-gray-100"
              onClick={() => setClassInfo(true)}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-screen w-full">
        <div className="w-3/4 mt-12 m-2">
          <table id="timetable" className="border m-2 ">
            <thead>
              <tr>
                {timeslots.map((e) => {
                  return (
                    <th
                      onClick={() =>
                        setShowTimeslotModal({ is: true, id: `${e.id}` })
                      }
                      align="center"
                      className="border"
                      style={{ width: "150px", minWidth: "70px" }}
                    >
                      {e.timeslot}{" "}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                {classroomno.map((e) => {
                  return (
                    <th
                      align="center"
                      id={e.id}
                      onClick={() => {
                        timeslots[e.id].timeslot.trim() !== ""
                          ? setShowClassroomModal({ is: true, id: `${e.id}` })
                          : alert("First Select Timeslot");
                      }}
                      className="border"
                    >
                      {e.no}
                    </th>
                  );
                })}
              </tr>
              {timetable.days.map((e) => {
                return (
                  <tr>
                    <td align="center" className="border">
                      {e.day}
                    </td>
                    {e.timeslots.map((ele) => {
                      return (
                        <td
                          align="center"
                          className={`${
                            edit.id == ele.id && e.day == edit.day
                              ? "border-4"
                              : "border"
                          }`}
                          onClick={() =>
                            setEdit(() => {
                              const edit = true;
                              const day = e.day;
                              const id = ele.id;
                              const classroom = classroomno[id].no;
                              const timeslot = timeslots[id].id;
                              const type = classroomno[id].type;
                              return {
                                edit,
                                day,
                                id,
                                classroom,
                                timeslot,
                                type,
                              };
                            })
                          }
                        >
                          {ele.Subject}
                          <br />
                          {ele.Faculty}
                          <br />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="flex flex-row justify-between p-2">
            {timetable.semester == "" || timetable.division == "" ? (
              <p>please select semester and division first</p>
            ) : (
              <CSVManage
                timetable={timetable}
                timeslots={timeslots}
                setTimetable={setTimetable}
              />
            )}

            <div>
              <button
                className="rounded bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-1 focus:ring-offset-2  p-4 focus:ring-blue-500 m-1 text-white"
                onClick={() => {
                  // ClearTimetableFields(setTimetable, setAvailFaculty);
                }}
              >
                Clear Fields
              </button>
              <button
                className="rounded bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-offset-2  p-4 focus:ring-blue-500 m-1 text-white"
                onClick={ClearTimetable}
              >
                Delete
              </button>
              <button
                className="rounded bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-1 focus:ring-offset-2  p-4 focus:ring-blue-500 m-1 text-white"
                onClick={handleSubmit}
              >
                Done
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 border-l">
          <div className="m-2 border justify-center bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-center font-bold mb-4">Faculty</h2>
            <ul className="list-disc pl-4  mx-8">
              {["", ...availFaculty].map((e) => {
                return (
                  <li
                    className={`${
                      true
                        ? "bg-lime-700 text-center hover:bg-lime-800 m-1 border p-2 text-white "
                        : "bg-red-700 text-center hover:bg-red-800 m-1 border p-2"
                    }`}
                    onClick={() =>
                      updateFaculty(
                        edit.day,
                        edit.id,
                        edit.classroom,
                        edit.timeslot,
                        edit.type,
                        e,
                        setTimetable
                      )
                    }
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="m-2 border justify-center bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl text-center font-bold mb-4">Subject</h2>
            <ul className="list-disc pl-4 mx-8">
              {["", "A.O.S", "L.T", "A.J.T", "S.E", "D.P.A.F"].map((e) => {
                return (
                  <li
                    className={`${
                      true
                        ? "bg-lime-700 text-center hover:bg-lime-800 m-1 border p-2 text-white "
                        : "bg-red-700 text-center hover:bg-red-800 m-1 border p-2"
                    }`}
                    onClick={() =>
                      updateSubject(edit.day, edit.id, e, setTimetable)
                    }
                  >
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <TimeslotsModal
          showModal={showTimeslotModal}
          // setData={setSlots}
          setShowModal={setShowTimeslotModal}
        />
        <ClassroomModal
          showModal={showClassroomModal}
          data={classroomno}
          // setData={setRoomNo}
          setShowModal={setShowClassroomModal}
        />
      </div>
    </>
  );
}
