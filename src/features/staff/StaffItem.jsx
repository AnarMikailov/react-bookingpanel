import React from "react";

const StaffItem = ({ name, mail, img }) => {
  return (
    <div class="booking booking__container-staff_card">
      <div class="booking__container__staff_card-img">
        <img src={`/assets/img/${img}`} alt="doctor" />
      </div>
      <div class="booking__container-description">
        <span class="booking__container-staff_card-name">Alex Rosetta</span>
        <span class="booking__container-staff_card-mail">
          alexyrosetta@gmail.com
        </span>
      </div>
    </div>
  );
};

export default StaffItem;
