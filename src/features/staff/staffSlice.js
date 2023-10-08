import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    increase: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { increase } = staffSlice.actions;
export default staffSlice.reducer;
