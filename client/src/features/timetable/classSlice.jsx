import { createSlice } from "@reduxjs/toolkit";


const classroom = [
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
];

export const classSlice = createSlice({
  name: "class",
  initialState: classroom,
  reducers: {
    updateClassroomTimetable: (state, action) => {
      const { dayIndex, slotIndex, slot, semester, division } = action.payload;
      if (slot.Classroom?.trim() == "" || slot.Type?.trim() == "") {
        return state;
      }
      const index = state.findIndex(
        (item) => item.no == slot.Classroom && item.type == slot.Type
      );

      if (index > 0) {
        const updatedClassroom = { ...state[index] };
        const updatedDays = [...updatedClassroom.days];
        const updatedDay = { ...updatedDays[dayIndex] };
        const updatedTimeslots = [...updatedDay.timeslots];
        const updatedTimeslot = {
          ...updatedTimeslots[slotIndex],
          id: slot.id,
          Subject: slot.Subject,
          Faculty: slot.Faculty,
          Timeslot: slot.Timeslot,
          Semester: semester,
          Division: division,
        };

        updatedTimeslots[slotIndex] = updatedTimeslot;
        updatedDay.timeslots = updatedTimeslots;
        updatedDays[dayIndex] = updatedDay;
        updatedClassroom.days = updatedDays;
        const updatedState = [
          ...state.slice(0, index),
          updatedClassroom,
          ...state.slice(index + 1),
        ];

        return updatedState;
      } else {
        const newClassroom = {
          no: slot.Classroom,
          type: slot.Type,
          days: classroom[0].days.map((day, i) => {
            if (i === dayIndex) {
              return {
                day: day.day,
                timeslots: day.timeslots.map((timeslot) => {
                  if (timeslot.id === slot.id) {
                    return {
                      id: slot.id,
                      Subject: slot.Subject,
                      Faculty: slot.Faculty,
                      Timeslot: slot.Timeslot,
                      Semester: semester,
                      Division: division,
                    };
                  } else {
                    return timeslot;
                  }
                }),
              };
            } else {
              return day;
            }
          }),
        };

        return [...state, newClassroom];
      }
    },

    createClassroom: (state, action) => {
      const { no, type } = action.payload;
      const classroomIndex = state.findIndex(
        (item) => item.no == no && item.type == type
      );
      if (classroomIndex < 0) {
        const newClassroom = {
          no: no,
          type: type,
          days: classroom[0].days,
        };
        return [...state, newClassroom];
      }
      return state;
    },
  },
});

export const { updateClassroomTimetable, createClassroom } = classSlice.actions;
export default classSlice.reducer;
