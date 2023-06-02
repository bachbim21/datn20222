import { createSlice } from "@reduxjs/toolkit";
import { getLocal } from "../../utils/app.function";
const NodeSlice = createSlice({
  name: "node",
  initialState: {
    node: null,
    path: null,
    scale: null,
  },
  reducers: {
    SetNode: (state, actions) => {
      state.node = actions.payload.node;
      state.path = actions.payload.path;
    },
    UpdateNode: (state, actions) => {
      state.node = actions.payload;
    },
    SetScale: (state, actions) => {
      state.scale = actions.payload;
    },
  },
});
export const { SetNode, UpdateNode, SetScale } = NodeSlice.actions;
export default NodeSlice.reducer;
