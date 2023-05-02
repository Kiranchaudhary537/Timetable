import { createSlice } from "@reduxjs/toolkit";

export const classFacultySlice = createSlice({
  name: "facultyName",
  initialState: [],
  reducers: {
    addFacultyNames: (state, action) => {
      const { Faculty } = action.payload;

      // Check if the faculty name already exists in the state
      const existingFaculty = state.find((faculty) => faculty.name === Faculty);

      if (!existingFaculty) {
        // Add the new faculty name to the state as an object
        return [...state, { name: Faculty }];
      } else {
        // Return the original state if the faculty name already exists
        return state;
      }
    },
    setFacultyNames: (state, action) => {
      const { facultyNames } = action.payload;
      state = facultyNames;
      return state;
    },
    resetFacultyNames: (state,action) => {
      state = [];
      return state;
    },
  },
});

export const { addFacultyNames,setFacultyNames,resetFacultyNames } = classFacultySlice.actions;
export default classFacultySlice.reducer;
