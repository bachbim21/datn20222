import { createSelector } from "@reduxjs/toolkit";
export const user = (state) => state.rootState.user;
export const loading = (state) => state.rootState.loading;
export const sizeWindown = (state) => state.rootState.size;
export const domId = (state) => state.element.domId;
export const path = (state) => state.node.path;
export const node = (state) => state.node.node;
