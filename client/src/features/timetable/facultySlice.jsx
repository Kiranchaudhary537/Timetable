import { createSlice } from "@reduxjs/toolkit";

const faculty = [
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
];
export const timetableSlice = createSlice({
  name: "faculty",
  initialState: faculty,
  reducers: {
    updateFacultyTimetable: (state, action) => {
      const { dayIndex, slotIndex, slot, semester, division } = action.payload;
      const index = state.findIndex((item) => item.name == slot.Faculty);

      if (index > 0) {
        const updatedFaculty = { ...state[index] };
        const updatedDays = [...updatedFaculty.days];
        const updatedDay = { ...updatedDays[dayIndex] };
        const updatedTimeslots = [...updatedDay.timeslots];
        const updatedTimeslot = {
          ...updatedTimeslots[slotIndex],
          id: slot.id,
          Subject: slot.Subject,
          Classroom: slot.Classroom,
          Type: slot.Type,
          Timeslot: slot.Timeslot,
          Semester: semester,
          Division: division,
        };

        updatedTimeslots[slotIndex] = updatedTimeslot;
        updatedDay.timeslots = updatedTimeslots;
        updatedDays[dayIndex] = updatedDay;
        updatedFaculty.days = updatedDays;
        const updatedState = [
          ...state.slice(0, index),
          updatedFaculty,
          ...state.slice(index + 1),
        ];

        return updatedState;
      } else {
        const newFaculty = {
          name: slot.Faculty,
          days: faculty[0].days.map((day, i) => {
            if (i === dayIndex) {
              return {
                day: day.day,
                timeslots: day.timeslots.map((timeslot) => {
                  if (timeslot.id === slot.id) {
                    return {
                      id: slot.id,
                      Subject: slot.Subject,
                      Classroom: slot.Classroom,
                      Type: slot.Type,
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

        return [...state, newFaculty];
      }
    },
    setFacultyStateToEmpty: (state, action) => {
      const { semester, division } = action.payload;

      let updatedFaculty = state?.map((f) => {
        let updatedDays = f.days?.map((d) => {
          let updatedTimeslots = d.timeslots.map((t) => {
            if (t.Division === division && t.Semester === semester) {
              return {
                ...t,
                Division: "",
                Semester: "",
                Subject: "",
                Classroom: "",
                Type: "",
              };
            }
            return t;
          });
          return { ...d, timeslots: updatedTimeslots };
        });
        return { ...f, days: updatedDays };
      });
      state = updatedFaculty;
      return state;
    },

    setFacultyTimetable: (state, action) => {
      const { timetable } = action.payload;
      state =timetable;
      return state;
    },
  },
});

export const {
  updateFacultyTimetable,
  setFacultyTimetable,
  setFacultyStateToEmpty,
} = timetableSlice.actions;
export default timetableSlice.reducer;
