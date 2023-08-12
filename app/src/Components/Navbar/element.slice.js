import { createSlice } from "@reduxjs/toolkit";
const ElementSlice = createSlice({
  name: "element",
  initialState: {
    focusId: null,
    moveId: null,
    pFocusId: null,
    overId: null,
    pOverId: null,
    hoverId: null,
    pHoverId: null,
  },
  reducers: {
    SetDomId: (state, actions) => {
      if (state.focusId != actions.payload) {
        state.pFocusId = state.focusId;
        state.focusId = actions.payload;
        let previousElement = document.getElementById(state.pFocusId);
        previousElement?.classList.remove("click-border");

        let currentElement = document.getElementById(state.focusId);
        currentElement?.classList.remove("hover-dashed");
        currentElement?.classList.add("click-border");
      } else {
        let currentElement = document.getElementById(state.focusId);
        currentElement.classList.remove("click-border");
        currentElement.classList.add("hover-dashed");
        state.focusId = null;
        state.pFocusId = null;

      }

    },
    SetOver: (state, actions) => {
      state.overId = actions.payload;
      let currentElement = document.getElementById(state.overId);
      currentElement?.classList.add("over");
    },
    SetHover: (state, actions) => {
      state.pHoverId = state.hoverId;
      state.hoverId = actions.payload;
      let previousElement = document.getElementById(state.pHoverId);
      previousElement?.classList.remove("hover-dashed");
      let currentElement = document.getElementById(state.hoverId);
      currentElement?.classList.add("hover-dashed");
    },
    SetMove: (state, actions) => {
      if(state.moveId == actions.payload) return
      state.moveId = actions.payload
    }
  },
});
export const { SetDomId, SetOver, SetHover, SetMove } = ElementSlice.actions;
export default ElementSlice.reducer;
