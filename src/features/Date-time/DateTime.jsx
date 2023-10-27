import React, { useState } from "react";

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDay, setActiveDay] = useState("");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    const days = [];

    const handleClick = () => {};

    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="empty-day"></div>);
    }

    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      if (day === +activeDay) {
        days.push(
          <div key={`day-selected-${day}`} className="day-selected active-day ">
            {day}
          </div>
        );
      } else if (day === 4 || day === 5 || day === 6) {
        days.push(
          <div
            onClick={(e) => {
              setActiveDay(e.target.textContent);
            }}
            key={`day-selected-${day}`}
            className="day-selected  "
          >
            {day}
          </div>
        );
      } else {
        days.push(
          <div key={`day-${day}`} className="day">
            {day}
          </div>
        );
      }
    }

    return (
      <div>
        <div className="days">{days}</div>
      </div>
    );
  };

  const handlePrevClick = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleNextClick = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div id="tab-3" className="content content-dateandtime">
      <p className="booking__container-content-heading">Select date & time</p>
      <div className="line"></div>
      <div className="booking__container-date">
        <div className="calendar-container">
          <div className="header">
            <div id="monthYear">
              <div>
                <button id="prevBtn" onClick={handlePrevClick}>
                  <img src="/assets/img/Vector (1).png" alt="left-arrow" />
                </button>
              </div>
              <div className="monthName">
                {monthNames[currentDate.getMonth()]}
              </div>
              <div className="year">{currentDate.getFullYear()}</div>
              <div>
                <button id="nextBtn" onClick={handleNextClick}>
                  <img src="/assets/img/Vector (2).png" alt="left-arrow" />
                </button>
              </div>
            </div>
          </div>
          <div className="calendar">
            <div className="weekdays">
              <div>
                <p>Sun</p>
              </div>
              <div>
                <p>Mon</p>
              </div>
              <div>
                <p>Tue</p>
              </div>
              <div>
                <p>Wed</p>
              </div>
              <div>
                <p>Thu</p>
              </div>
              <div>
                <p>Fri</p>
              </div>
              <div>
                <p>Sat</p>
              </div>
            </div>
            <div className="line"></div>
            {renderCalendar()}
          </div>
        </div>
        <div className="calendar-container-2">
          <div className="header-2">Time</div>
          <div className="calendar-2">
            <div className="weekdays-2">
              <div>
                <p className="date__container-heading">Select Date</p>
              </div>
            </div>
            <div className="line"></div>
            <div className="calendar__time-container">
              <div className="time time-1 normal-background">
                <span className="calendar__time-container_start-time">
                  09:00
                </span>
                <span className="calendar__time-container_end-time">09:30</span>
              </div>
              <div className="time time-2 normal-background">
                <span className="calendar__time-container_start-time">
                  09:30
                </span>
                <span className="calendar__time-container_end-time">10:00</span>
              </div>
              <div className="time time-3 normal-background">
                <span className="calendar__time-container_start-time">
                  10:00
                </span>
                <span className="calendar__time-container_end-time">19:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
