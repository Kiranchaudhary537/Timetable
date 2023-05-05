import { createSlice } from "@reduxjs/toolkit";

const timetable = {
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
};

const updateTimetableForCSV = (d, id, timetable) => {
  const dayIndex = timetable.days.findIndex((day) => day.day == d.DAY);
  if (dayIndex === -1) return timetable; // Day not found in timetable

  const timeslotIndex = timetable.days[dayIndex].timeslots.findIndex(
    (timeslot) => timeslot.id == id
  );
  if (timeslotIndex === -1) return timetable; // Timeslot not found in timetable

  timetable.days[dayIndex].timeslots[timeslotIndex] = {
    id,
    Timeslot: d.TIMESLOT,
    Faculty: d.FACULTY,
    Subject: d.SUBJECT,
    Classroom: d.CLASSROOM,
    Type: d.TYPE,
    // Add more fields here if needed
  };
  
  return timetable;
};

export const timetableSlice = createSlice({
  name: "timetable",
  initialState: timetable,
  reducers: {
    updateTimetable: (state, action) => {
      const {
        dayIndex,
        id,
        day,
        type,
        classroom,
        timeslot,
        semester,
        division,
        subject,
        faculty,
        valueForUpdate,
      } = action.payload;
     
      if (valueForUpdate == "Faculty") {
        const updatedDay = state.days[dayIndex];

        if (!updatedDay) {
          return state;
        }

        const updatedSlot = updatedDay.timeslots[id - 1];
        if (!updatedSlot) {
          return state;
        }

        const updatedSlotObj = {
          ...updatedSlot,
          Classroom: classroom,
          Timeslot: timeslot,
          Type: type,
          Faculty: faculty,
        };

        const updatedDayObj = {
          ...updatedDay,
          timeslots: updatedDay.timeslots.map((s) =>
            s.id === id ? updatedSlotObj : s
          ),
        };
        const updatedDays = state.days.map((d) =>
          d.day === day ? updatedDayObj : d
        );
        return {
          ...state,
          semester: semester,
          division: division,
          days: updatedDays,
        };
      } else if (valueForUpdate == "Subject") {
        const updatedDay = state.days[dayIndex];

        if (!updatedDay) {
          return state;
        }

        const updatedSlot = updatedDay.timeslots[id - 1];

        if (!updatedSlot) {
          return state;
        }

        const updatedSlotObj = {
          ...updatedSlot,
          Classroom: classroom,
          Timeslot: timeslot,
          Type: type,
          Subject: subject,
        };

        const updatedDayObj = {
          ...updatedDay,
          timeslots: updatedDay.timeslots.map((s) =>
            s.id === id ? updatedSlotObj : s
          ),
        };
        const updatedDays = state.days.map((d) =>
          d.day === day ? updatedDayObj : d
        );

        return {
          ...state,
          semester: semester,
          division: division,
          days: updatedDays,
        };
      }

      return state;
    },
    setCSVToTimetable: (state, action) => {
      const { data, id } = action.payload;
      let newTimetable = state;
      newTimetable = updateTimetableForCSV(data, id, newTimetable);
      state = newTimetable;
  
      return state;
    },

    setTimetable: (state, action) => {
      const { timetable } = action.payload;
      state = timetable;
      return state;
    },
    resetTimetable: (state) => {
      state = timetable;
      return state;
    },
  },
});

export const {
  updateTimetable,
  setCSVToTimetable,
  setTimetable,
  resetTimetable,
} = timetableSlice.actions;
export default timetableSlice.reducer;
