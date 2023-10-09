import React from "react";

const ServiceItem = ({ name, duration, price, img }) => {
  return (
    <div class="service-card booking__container-staff_card">
      <div class="booking__container__staff_card-img">
        <img src={`/assets/img/${img}`} alt="doctor" />
      </div>
      <div class="booking__container-description">
        <span class="booking__container-staff_card-name">{name}</span>
        <span class="booking__container-staff_card-mail"> {duration} </span>
      </div>
      <p class="service-price booking__container-staff_card-price-1">
        {price}$
      </p>
    </div>
  );
};

export default ServiceItem;
