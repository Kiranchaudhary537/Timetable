import { configureStore } from "@reduxjs/toolkit";
import timetableSlice from "./timetableSlice";
import timeslotSlice from "./timeslotSlice";
import classroomsSlice from "./classroomsSlice";
import classSlice from "./classSlice";
import facultySlice from "./facultySlice";
import classFacultySlice from "./classFacultySlice";

const store = configureStore({
  reducer: {
    timetable: timetableSlice,
    timeslot: timeslotSlice,
    classrooms: classroomsSlice,
    class: classSlice,
    faculty: facultySlice,
    classFaculty:classFacultySlice
  },
});

export default store;
