import { createSlice } from "@reduxjs/toolkit";
const DefaultSlice = createSlice({
  name: "rootState",
  initialState: {
    loading: {
      text: "",
      status: false,
    },
    size: {
      width: null,
      height: null,
    },
  },
  reducers: {
    LoadingService: (state, actions) => {
      state.loading.text = actions.payload.text;
      state.loading.status = actions.payload.status;
    },
    ReSize: (state, actions) => {
      state.size = actions.payload;
    },
  },
});
export const { LoadingService, ReSize } = DefaultSlice.actions;
export default DefaultSlice.reducer;
