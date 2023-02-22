import { createSlice } from "@reduxjs/toolkit";

const crudSlice = createSlice({
  name: "crud",
  initialState: {
    todo: [
      {
        id: 1,
        name: "hi",
      },
      {
        id: 2,
        name: "hello",
      },
    ],
  },
  reducers: {
    addtodo: (state, action) => {
      let newuserid = state.todo.length + 1;
      state.todo.push({ id: newuserid, name: action.payload });
    },
    edittodo: (state, action) => {
      let ink = state.todo.findIndex((user) => user.id === action.payload.id);
      state.todo.splice(ink, 1, action.payload);
    },
    deltodo: (state, action) => {
      let ink = state.todo.findIndex((user) => user.id === action.payload);
      state.todo.splice(ink, 1);
    },
  },
});

export const { addtodo, deltodo, edittodo } = crudSlice.actions;
export default crudSlice.reducer;
