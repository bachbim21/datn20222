import { createSelector } from "@reduxjs/toolkit";
export const user = (state) => state.rootState.user;
export const loading = (state) => state.rootState.loading;
