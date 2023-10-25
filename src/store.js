import { configureStore } from "@reduxjs/toolkit";
import staffReducer from "./features/staff/staffSlice";
import headingReducer from "./features/headings/headingSlice";
import serviceReducer from "./features/Services/serviceSlice";
const store = configureStore({
  reducer: {
    staff: staffReducer,
    headings: headingReducer,
    service: serviceReducer,
  },
});
export default store;
