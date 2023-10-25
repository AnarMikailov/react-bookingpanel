import React, { useState } from "react";
import StaffItem from "./StaffItem";
import { staff } from "../../data";
import { useDispatch, useSelector } from "react-redux";
import { choosedStaff } from "./staffSlice";
import { moveToNext } from "../headings/headingSlice";
const Staff = () => {
  const dispatch = useDispatch();
  const selectedStaff = useSelector((state) => state.staff.selectedStaffId);
  const handleStaffSelection = (staffId) => {
    dispatch(choosedStaff(staffId));
    dispatch(moveToNext());
  };

  return (
    <div id="tab-1" className="content content-stuff">
      <p className="booking__container-content-heading">Select staff</p>
      <div className="line"></div>
      {staff.map((staff) => (
        <div key={staff.id}>
          <StaffItem
            isSelected={staff.id === selectedStaff}
            id={staff.id}
            name={staff.name}
            email={staff.email}
            img={staff.image}
            handleStaffSelection={handleStaffSelection}
          />
        </div>
      ))}
    </div>
  );
};
export default Staff;
