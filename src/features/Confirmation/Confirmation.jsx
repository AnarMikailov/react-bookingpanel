import React from "react";

const Confirmation = () => {
  return (
    <div id="tab-4" class="content content-confirmation ">
      <p class="booking__container-content-heading">Confirm details</p>
      <div class="line"></div>
      <div class="content__confirmation-container">
        <form class="booking__confirmation-form" action="">
          <div class="name-label">
            <label
              class="booking__confirmation-firstname_label"
              for="first-name"
            >
              First name <span>*</span>
            </label>
            <input
              class="booking__confirmation-firstname_input"
              type="text"
              id="first-name"
            />
            <label class="booking__confirmation-email_label" for="email">
              E-mail <span>*</span>
            </label>
            <input type="text" id="email" />
          </div>
          <div class="info-label">
            <label class="booking__confirmation-lastname_input" for="last-name">
              Last name <span>*</span>
            </label>
            <input type="text" id="last-name" />

            <label class="booking__confirmation-phone_label" for="phone">
              Phone
            </label>
            <input type="number" id="phone" />
          </div>
          <input id="reset" class="hidden" type="reset" value="Reset" />
        </form>

        <div class="booking__container-note">
          <p class="booking__container_note-heading">Note</p>
          <div class="booking__container_note-description">
            <div class="note__description-container">
              <div class="staff">
                <span class="field staff__field">Staff:</span>
                <span class="staff__name">Alexy Rosetta</span>
              </div>
              <div class="service">
                <span class="field service__field">Service:</span>
                <span class="service__name">Oral hygine</span>
              </div>
              <div class="date">
                <span class="field Date__field">Date:</span>
                <span class="date__name"> 2022-03-04 / 09:30-10:00</span>
              </div>
              <div class="total">
                <span class="field total__field">Total:</span>
                <span class="total__name">120$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
