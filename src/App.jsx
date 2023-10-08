import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Staff from "./features/staff/Staff";
import Service from "./features/Services/Service";
import Headings from "./features/headings/Headings";
import Footer from "./components/Footer";
import DateTime from "./features/Date-time/DateTime";
import Confirmation from "./features/Confirmation/Confirmation";
const App = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.headings.currentPage);
  console.log(currentPage);
  return (
    <div class="booking__container">
      <Headings />
      <div className="booking__container-content">
        {currentPage == 1 && <Staff />}
        {currentPage == 2 && <Service />}
        {currentPage == 3 && <DateTime />}
        {currentPage == 4 && <Confirmation />}
        <Footer />
      </div>
    </div>
  );
};

export default App;
