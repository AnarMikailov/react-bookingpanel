import React from "react";
import StaffItem from "./StaffItem";
import { staff } from "../../data";
const Staff = () => {
  return (
    <div id="tab-1" class="content content-stuff">
      <p class="booking__container-content-heading">Select staff</p>
      <div class="line"></div>
      {staff.map((staff) => (
        <StaffItem
          id={staff.id}
          name={staff.name}
          email={staff.email}
          key={staff.id}
          img={staff.image}
        />
      ))}
    </div>
  );
};

export default Staff;
