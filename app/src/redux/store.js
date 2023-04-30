import { configureStore } from "@reduxjs/toolkit";
import DefaultSlice from "../Components/Layout/layout.slice";
export const store = configureStore({
  reducer: {
    rootState: DefaultSlice,
  },
});
