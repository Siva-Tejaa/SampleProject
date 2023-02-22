import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./CounterSlice";

import crudReducer from "./crudSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    crud: crudReducer,
  },
});

export default store;
