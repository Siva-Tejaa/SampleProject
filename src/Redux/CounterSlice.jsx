import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    counterIncrement: (state) => {
      state.counterValue = state.counterValue + 1;
    },

    counterDecrement: (state) => {
      state.counterValue = state.counterValue - 1;
    },
    incbyValue: (state, action) => {
      state.counterValue = state.counterValue + action.payload;
    },
  },
});

export const { counterIncrement, counterDecrement, incbyValue } =
  CounterSlice.actions;

export default CounterSlice.reducer;
