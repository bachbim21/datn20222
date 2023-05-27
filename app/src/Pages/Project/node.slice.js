import { createSlice } from "@reduxjs/toolkit";
const NodeSlice = createSlice({
  name: "node",
  initialState: {
    file: null,
    path: null,
  },
  reducers: {
    SetNode: (state, actions) => {
      state.file = actions.payload.file;
      state.path = actions.payload.path;
    },
  },
});
export const { SetNode } = NodeSlice.actions;
export default NodeSlice.reducer;
