import { createSlice } from "@reduxjs/toolkit";

const classroomno = [
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
];

export const classroomsSlice = createSlice({
  name: "classrooms",
  initialState: classroomno,
  reducers: {
    updateClassroom: (state, action) => {
      const { id, no, type } = action.payload;
      return state.map((item) => {
        if (item.id === parseInt(id)) {
          return {
            ...item,
            no: no,
            type: type,
          };
        }
        return item;
      });
    },
    setClassroom: (state, action) => {
      const { classrooms } = action.payload;
      state=classrooms
      return state;
    },
    resetClassroom: (state) => {
      state = classroomno;
      return state;
    },
  },
});

export const { updateClassroom,setClassroom,resetClassroom } = classroomsSlice.actions;
export default classroomsSlice.reducer;
