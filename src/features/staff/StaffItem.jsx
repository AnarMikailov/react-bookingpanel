import React from "react";
import { useDispatch, useSelector } from "react-redux";

const StaffItem = ({
  name,
  email,
  img,
  id,
  isSelected,
  handleStaffSelection,
}) => {
  const handleItemClick = () => {
    handleStaffSelection(id);
  };

  return (
    <div
      onClick={handleItemClick}
      className={`booking booking__container-staff_card ${
        isSelected && "green-border"
      }`}
    >
      <div className="booking__container__staff_card-img">
        <img src={`/assets/img/${img}`} alt="doctor" />
      </div>
      <div className="booking__container-description">
        <span className="booking__container-staff_card-name">{name}</span>
        <span className="booking__container-staff_card-mail">{email}</span>
      </div>
    </div>
  );
};

export default StaffItem;
