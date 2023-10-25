import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
  // isSelected: false,
  selectedStaffId: null,
};

export const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    // increase: (state) => {
    //   state.count = state.count + 1;
    // },
    choosedStaff: (state, action) => {
      state.selectedStaffId = action.payload;
    },
  },
});

export const { increase, choosedStaff } = staffSlice.actions;
export default staffSlice.reducer;
