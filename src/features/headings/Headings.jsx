import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Headings = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.headings.currentPage);

  const active = "booking__container__items-circle active-background";
  const deactive = "booking__container__items-circle deactive-background";
  const completed = "booking__container__items-circle completed-background";
  const completedImg = "circle-img";

  return (
    <div className="booking__container-headings">
      <div className="booking__container-items">
        <div className="booking__container-item-1">
          <div className={currentPage === 1 ? active : completed}>
            <img
              className={currentPage === 1 ? "hidden" : completedImg}
              src="/assets/img/Path.png"
              alt=""
            />
            <span
              className={`heading-number ${currentPage === 1 ? "" : "hidden"}`}
            >
              1
            </span>
          </div>
          <p
            id="active"
            className={`booking__container__items-name ${
              currentPage === 1
                ? "active"
                : currentPage < 2
                ? "deactive"
                : "completed"
            }`}
          >
            Staff
          </p>
        </div>
        <div className="booking__container-item-2">
          <div
            className={
              currentPage === 2
                ? active
                : currentPage < 2
                ? deactive
                : completed
            }
          >
            <img
              className={currentPage > 2 ? completedImg : "hidden"}
              src="/assets/img/Path.png"
              alt="completed"
            />
            <span className={`heading-number ${currentPage > 2 && "hidden"}`}>
              2
            </span>
          </div>
          <p
            className={`booking__container__items-name ${
              currentPage === 2
                ? "active"
                : currentPage < 2
                ? "deactive"
                : "completed"
            }`}
          >
            Service
          </p>
        </div>
        <div className="booking__container-item-3">
          <div
            className={
              currentPage === 3
                ? active
                : currentPage < 3
                ? deactive
                : completed
            }
          >
            <img
              className={currentPage > 3 ? completedImg : "hidden"}
              src="/assets/img/Path.png"
              alt="completed"
            />
            <span className={`heading-number ${currentPage > 3 && "hidden"}`}>
              3
            </span>
          </div>
          <p
            className={`booking__container__items-name ${
              currentPage === 3
                ? "active"
                : currentPage < 3
                ? "deactive"
                : "completed"
            }`}
          >
            Date & Time
          </p>
        </div>
        <div className="booking__container-item-4">
          <div
            className={
              currentPage === 4
                ? active
                : currentPage < 4
                ? deactive
                : completed
            }
          >
            <img
              className={currentPage > 4 ? completedImg : "hidden"}
              src="/assets/img/Path.png"
              alt="completed"
            />
            <span className={`heading-number ${currentPage > 4 && "hidden"}`}>
              4
            </span>
          </div>
          <p
            className={`booking__container__items-name ${
              currentPage === 4
                ? "active"
                : currentPage < 4
                ? "deactive"
                : "completed"
            }`}
          >
            Confirmation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headings;
