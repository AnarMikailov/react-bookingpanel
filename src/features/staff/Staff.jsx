import React from "react";

const Staff = () => {
  return (
    <div id="tab-1" class="content content-stuff">
      <p class="booking__container-content-heading">Select staff</p>
      <div class="line"></div>
      <div class="booking booking__container-staff_card">
        <div class="booking__container__staff_card-img">
          <img src="/assets/img/doctor1.png" alt="doctor" />
        </div>
        <div class="booking__container-description">
          <span class="booking__container-staff_card-name">Alex Rosetta</span>
          <span class="booking__container-staff_card-mail">
            alexyrosetta@gmail.com
          </span>
        </div>
      </div>
      <div class="booking booking__container-staff_card">
        <div class="booking__container__staff_card-img">
          <img src="/assets/img/doctor2.png" alt="doctor" />
        </div>
        <div class="booking__container-description">
          <span class="booking__container-staff_card-name">Maria July</span>
          <span class="booking__container-staff_card-mail">
            mariajuly@egmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Staff;
