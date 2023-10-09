import React from "react";
import { services } from "../../data";
import ServiceItem from "./ServiceItem";
const Service = () => {
  return (
    <div id="tab-2" class="content content-servies ">
      <p class="booking__container-content-heading">Select service</p>
      <div class="line"></div>

      {services.map((service) => (
        <ServiceItem
          name={service.name}
          id={service.id}
          key={service.id}
          img={service.image}
          duration={service.duration}
          price={service.price}
        />
      ))}
    </div>
  );
};

export default Service;
