import { createSlice } from "@reduxjs/toolkit";

const NodeSlice = createSlice({
  name: "node",
  initialState: {
    node: null,
    path: null,
    projectId: null,
    showModelShare: false
  },

  reducers: {
    SetNode: (state, actions) => {
      state.node = actions.payload.node;
      state.path = actions.payload.path;
    },
    UpdateNode: (state, actions) => {
      state.node = actions.payload;
    },
    SetProjectId: (state, action) => {
      state.projectId = action.payload
    },
    SetShowShare: (state, action) => {
      state.showModelShare = action.payload
    }
  },
});
export const { SetNode, UpdateNode, SetProjectId, SetShowShare } = NodeSlice.actions;
export default NodeSlice.reducer;
