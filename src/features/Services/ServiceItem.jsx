import React from "react";

const ServiceItem = ({
  name,
  duration,
  price,
  img,
  id,
  handleServiceSelection,
  isSelected,
}) => {
  const handleServiceClick = () => {
    handleServiceSelection(id);
    console.log(isSelected);
  };
  return (
    <div
      onClick={handleServiceClick}
      className={`service-card booking__container-staff_card ${
        isSelected && " green-border"
      }`}
    >
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
