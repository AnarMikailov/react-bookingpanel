import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Headings = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.headings.currentPage);

  const active = "active=background";
  const completed = "completed=background";
  return (
    <div class="booking__container-headings">
      <div class="booking__container-items">
        <div class="booking__container-item-1">
          <div
            class={`booking__container__items-circle ${
              currentPage == 1 ? "active-background" : "completed-background"
            }`}
          >
            <img
              class={`circle-img ${currentPage == 1 ? "hidden" : ""}`}
              src="/assets//img/Path.png"
              alt=""
            />
            <span class={`heading-number ${currentPage == 1 ? "" : "hidden"}`}>
              1
            </span>
          </div>
          <p id="active" class="booking__container__items-name active">
            Staff
          </p>
        </div>
        <div class="booking__container-item-2">
          <div class="booking__container__items-circle deactive-background">
            <img class="hidden" src="/assets//img/Path.png" alt="" />
            <span>2</span>
          </div>
          <p class="booking__container__items-name deactive">Service</p>
        </div>
        <div class="booking__container-item-3 deactive">
          <div class="booking__container__items-circle deactive-background">
            <img class="hidden" src="/assets//img/Path.png" alt="" />
            <span>3</span>
          </div>
          <p class="booking__container__items-name deactive">Date & Time</p>
        </div>
        <div class="booking__container-item-3">
          <div class="booking__container__items-circle deactive-background">
            <img class="hidden" src="/assets//img/Path.png" alt="" />
            <span>4</span>
          </div>
          <p class="booking__container__items-name deactive">Confirmation </p>
        </div>
      </div>
    </div>
  );
};

export default Headings;
