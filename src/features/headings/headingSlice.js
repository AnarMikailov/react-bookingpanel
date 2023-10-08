import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};
export const headingSlice = createSlice({
  name: "headings",
  initialState,

  reducers: {
    moveToNext(state) {
      if (state.currentPage == 4) return;
      state.currentPage = state.currentPage + 1;
    },
    moveToPrev(state) {
      if (state.currentPage == 1) return;
      state.currentPage = state.currentPage - 1;
    },
  },
});

export const { moveToNext, moveToPrev } = headingSlice.actions;
export default headingSlice.reducer;
