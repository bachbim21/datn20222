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
    user: {
      flagUpdated: 0,
    }

  },
  reducers: {
    LoadingService: (state, actions) => {
      state.loading.text = actions.payload.text;
      state.loading.status = actions.payload.status;
    },
    ReSize: (state, actions) => {
      state.size = actions.payload;
    },
    SetUserUpdated: (state) => {
      state.user.flagUpdated ++
    }
  },
});
export const { LoadingService, ReSize, SetUserUpdated } = DefaultSlice.actions;
export default DefaultSlice.reducer;
