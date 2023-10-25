import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedService: false,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    choosedService: (state, action) => {
      state.selectedService = action.payload;
    },
  },
});

export const { choosedService } = serviceSlice.actions;
export default serviceSlice.reducer;
