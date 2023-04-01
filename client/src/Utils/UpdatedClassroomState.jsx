import axios from "axios";
import { useState } from "react";

let classroomdays = [
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
];

export function UpdatedClassroomState(timetable, classroomno, setClassroom) {
  timetable.days.map((day, i) => {
    day.timeslots.map((slot, j) => {
      if (
        slot.Faculty.trim() != "" &&
        slot.Subject.trim() != 0 &&
        classroomno[slot.id].no != ""
      ) {
        updateClassroom(timetable, classroomno, setClassroom, day, slot, i, j);
        setClassroom((prevState) => {
          console.log(prevState);
          return prevState;
        });
      }
    });
  });
  setClassroom((prev) => {
    console.log(prev);
    return prev;
  });
  //   if (fetch == true) {
  //     console.log("classroom fetched");
  //   }
  //   axios
  //     .post("http://localhost:3000/v1/managetimetable/class", {
  //       timetable,
  //       classroomno,
  //       timeslots,
  //     })
  //     .then(alert("Timetable Updated"));
  return;
}

function updateClassroom(
  timetable,
  classroomno,
  setClassroom,
  day,
  slot,
  i,
  j
) {
  setClassroom((prevState) => {
    // const index = prevState.findIndex(
    //   (item) => item.no == classroomno[slot.id].no
    // );
    // console.log(index);
    // if (index > 0) {
    //   let updatedClassroom = [...prevState];
    //   let updatedTimeslot =
    //     updatedClassroom[index].days[i].timeslots[slot.id - 1];
    //   updatedTimeslot.Subject = slot.Subject;
    //   updatedTimeslot.Faculty = slot.Faculty;
    //   updatedTimeslot.Semester = timetable.semester;
    //   updatedTimeslot.Timeslot = slot.id;
    //   updatedTimeslot.Division = timetable.division;
    //   updatedClassroom[index].days[i].timeslots[slot.id - 1] = updatedTimeslot;
    //   return updatedClassroom;
    // } else {
    let updatedClassroom = {
      no: classroomno[slot.id].no,
      type: classroomno[slot.id].type,
      days: classroomdays,
    };
    let updatedTimeslot = updatedClassroom.days[i].timeslots[slot.id - 1];
    updatedTimeslot.Subject = slot.Subject;
    updatedTimeslot.Faculty = slot.Faculty;
    updatedTimeslot.Semester = timetable.semester;
    updatedTimeslot.Division = timetable.division;
    updatedClassroom.days[i].timeslots[slot.id - 1] = updatedTimeslot;

    return [...prevState, updatedClassroom];
    // }
    // return prevState;
  });
  return;
}
