import { createSlice } from "@reduxjs/toolkit";
const DefaultSlice = createSlice({
  name: "rootState",
  initialState: {
    user: {
      id: null,
      exp: null,
      roles: [],
    },
    loading: {
      text: "",
      status: false,
    },
    size: {
      width: null,
      height: null,
      scale: null,
    },
  },
  reducers: {
    LoadingService: (state, actions) => {
      state.loading.text = actions.payload.text;
      state.loading.status = actions.payload.status;
    },
    UserToken: (state, actions) => {
      if (actions.payload) {
        state.user.id = actions.payload.user_id;
        state.user.exp = actions.payload.exp;
        state.user.roles = actions.payload.roles;
      }
    },
    ReSize: (state, actions) => {
      state.size = actions.payload;
    },
  },
});
export const { LoadingService, UserToken, ReSize } = DefaultSlice.actions;
export default DefaultSlice.reducer;
