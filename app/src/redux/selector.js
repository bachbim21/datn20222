import { createSelector } from "@reduxjs/toolkit";
export const loading = (state) => state.rootState.loading;
export const sizeWindown = (state) => state.rootState.size;
export const focusId = (state) => state.element.focusId;
export const hoverId = (state) => state.element.hoverId;
export const path = (state) => state.node.path;
export const node = (state) => state.node.node;
export const flagUpdated = (state) => state.rootState.user.flagUpdated;
export const projectIdSelector = (state) => state.node.projectId
export const showModelShare = (state) => state.node.showModelShare
