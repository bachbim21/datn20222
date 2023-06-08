import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../utils/app.function";
const NodeSlice = createSlice({
  name: "node",
  initialState: {
    node: null,
    path: null,
  },
  reducers: {
    SetNode: (state, actions) => {
      state.node = actions.payload.node;
      state.path = actions.payload.path;
    },
    UpdateNode: (state, actions) => {
      state.node = actions.payload;
    },
  },
});
export const { SetNode, UpdateNode } = NodeSlice.actions;
export default NodeSlice.reducer;
