import { createSlice } from "@reduxjs/toolkit";
const ElementSlice = createSlice({
  name: "element",
  initialState: {
    data: {
      tag: null,
      type: null,
      text: "",
      width: null,
      height: null,
    },
    domId: null,
    root: null,
    previousId: null,
    style: {
      width: null,
      height: null,
      display: null,
    },
  },
  reducers: {
    SetDataElement: (state, actions) => {
      state.data = actions.payload;
    },
    SetDomId: (state, actions) => {
      if (state.domId != actions.payload) {
        state.previousId = state.domId;
        state.domId = actions.payload;
        let previousElement = document.getElementById(`${state.previousId}`);
        if (previousElement) {
          previousElement.classList.add("hover-dashed");
          previousElement.classList.remove("click-border");
        }
        let currentElement = document.getElementById(`${state.domId}`);
        currentElement?.classList.remove("hover-dashed");
        currentElement?.classList.add("click-border");
        state.style = {
          width: currentElement?.style.width,
          height: currentElement?.style.height,
        };
      } else {
        let currentElement = document.getElementById(`${state.domId}`);
        currentElement.classList.add("hover-dashed");
        currentElement.classList.remove("click-border");
        state.domId = null;
        state.previousId = null;
      }
    },
    SetStyle: (state, actions) => {
      state.style = actions.payload;
    },
    SetRoot: (state, actions) => {
      state.root = actions.payload;
    },
  },
});
export const { SetDataElement, SetDomId, SetRoot, SetStyle } =
  ElementSlice.actions;
export default ElementSlice.reducer;
