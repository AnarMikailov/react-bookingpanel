import React from "react";

const Service = () => {
  return (
    <div id="tab-2" class="content content-servies ">
      <p class="booking__container-content-heading">Select service</p>
      <div class="line"></div>
      <div class="service-card booking__container-staff_card">
        <div class="booking__container__staff_card-img">
          <img src="/assets/img/Oval.png" alt="doctor" />
        </div>
        <div class="booking__container-description">
          <span class="booking__container-staff_card-name">Oral hygiener</span>
          <span class="booking__container-staff_card-mail"> 1 hour </span>
        </div>
        <p class="service-price booking__container-staff_card-price-1">50$</p>
      </div>
      <div class="service-card booking__container-staff_card">
        <div class="booking__container__staff_card-img">
          <img src="/assets/img/service2.png" alt="doctor" />
        </div>
        <div class="booking__container-description">
          <span class="booking__container-staff_card-name">Implants</span>
          <span class="booking__container-staff_card-mail">
            1 hour 30 minutes
          </span>
        </div>
        <p class="service-price booking__container-staff_card-price-2">120$</p>
      </div>
      <div class="service-card booking__container-staff_card">
        <div class="booking__container__staff_card-img">
          <img src="/assets/img/service3.png" alt="doctor" />
        </div>
        <div class="booking__container-description">
          <span class="booking__container-staff_card-name">Check up</span>
          <span class="booking__container-staff_card-mail">
            1 hour 12 minute
          </span>
        </div>
        <p class="service-price booking__container-staff_card-price-3">140$</p>
      </div>
    </div>
  );
};

export default Service;
