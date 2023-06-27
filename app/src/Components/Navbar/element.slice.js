import { createSlice } from "@reduxjs/toolkit";
const ElementSlice = createSlice({
  name: "element",
  initialState: {
    domId: null,
    moveId: null,
    previousId: null,
    idOver: null,
    previousIdOver: null,
    idHover: null,
    previousIdHover: null,
  },
  reducers: {
    SetDomId: (state, actions) => {
      if (state.domId != actions.payload) {
        state.previousId = state.domId;
        state.domId = actions.payload;
        let previousElement = document.getElementById(state.previousId);
        previousElement?.classList.remove("click-border");

        let currentElement = document.getElementById(state.domId);
        currentElement?.classList.remove("hover-dashed");
        currentElement?.classList.add("click-border");
      } else {
        let currentElement = document.getElementById(state.domId);
        currentElement.classList.remove("click-border");
        currentElement.classList.add("hover-dashed");
        state.domId = null;
        state.previousId = null;
      }
    },
    SetOver: (state, actions) => {
      state.idOver = actions.payload;
      let currentElement = document.getElementById(state.idOver);
      currentElement?.classList.add("over");
    },
    SetHover: (state, actions) => {
      state.previousIdHover = state.idHover;
      state.idHover = actions.payload;
      let previousElement = document.getElementById(state.previousIdHover);
      previousElement?.classList.remove("hover-dashed");
      let currentElement = document.getElementById(state.idHover);
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
