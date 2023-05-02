import { createSlice } from "@reduxjs/toolkit";

const timeslots = [
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
];

export const timeslotSlice = createSlice({
  name: "timeslot",
  initialState: timeslots,
  reducers: {
    updateTimeslot: (state, action) => {
      const { id, timeslot } = action.payload;
      return state.map((item) => {
        if (item.id == parseInt(id)) {
          return {
            ...item,
            timeslot: timeslot,
          };
        }
        return item;
      });
    },
    setTimeSlot: (state, action) => {
      const { timeslots } = action.payload;
      state = timeslots;
      return state;
    },
    resetTimeSlot: (state) => {
      state = timeslots;
      return state;
    },
  },
});

export const { updateTimeslot,setTimeSlot,resetTimeSlot } = timeslotSlice.actions;
export default timeslotSlice.reducer;
