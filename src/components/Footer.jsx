import React from "react";
import { useDispatch } from "react-redux";
import { moveToNext, moveToPrev } from "../features/headings/HeadingSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const handleNextPage = () => {
    dispatch(moveToNext());
  };
  const handlePrevPage = () => {
    dispatch(moveToPrev());
  };
  return (
    <div class="booking__container-buttons">
      <button
        onClick={handlePrevPage}
        id="backButton"
        class="booking__container-button-back "
      >
        Back
      </button>
      <div id="warning" class="booking__caontainer_buttons-warning">
        <div class="booking__container__button_warning-img">
          <img src="./assets/img/Vector.png" alt="information" />
        </div>
        <p class="warning-text">SELECT STAFF</p>
      </div>
      <button
        onClick={handleNextPage}
        id="nextButton"
        class="booking__container-button"
      >
        Next
      </button>
      <button class="booking__container-button confirm-button hidden">
        CONFIRM BOOKING
      </button>
    </div>
  );
};

export default Footer;
