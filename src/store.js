import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./features/staff/staffSlice";
import headingReducer from "./features/headings/HeadingSlice";
const store = configureStore({
  reducer: { staff: staffReducer, headings: headingReducer },
});
export default store;
