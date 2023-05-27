import { configureStore } from "@reduxjs/toolkit";
import DefaultSlice from "../Components/Layout/layout.slice";
import ElementSlice from "../Components/Navbar/element.slice";
import NodeSlice from "../Pages/Project/node.slice";
export const store = configureStore({
  reducer: {
    rootState: DefaultSlice,
    element: ElementSlice,
    node: NodeSlice,
  },
});
