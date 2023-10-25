import React from "react";
import { services } from "../../data";
import ServiceItem from "./ServiceItem";
import { useDispatch, useSelector } from "react-redux";
import { choosedService } from "./serviceSlice";
import { moveToNext } from "../headings/headingSlice";
const Service = () => {
  const selectedService = useSelector((state) => state.service.selectedService);
  const dispatch = useDispatch();
  const handleServiceSelection = (serviceId) => {
    dispatch(choosedService(serviceId));
    dispatch(moveToNext());
    console.log(selectedService);
  };
  return (
    <div id="tab-2" class="content content-servies ">
      <p class="booking__container-content-heading">Select service</p>
      <div class="line"></div>
      {services.map((service) => (
        <ServiceItem
          isSelected={service.id == selectedService}
          name={service.name}
          id={service.id}
          key={service.id}
          img={service.image}
          duration={service.duration}
          price={service.price}
          handleServiceSelection={handleServiceSelection}
        />
      ))}
    </div>
  );
};

export default Service;
