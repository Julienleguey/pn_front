import React from "react";
import arrow from "../../../images/arrow.svg";
import classnames from "classnames";

const Arrow = ({ direction, slide }) => (
  <div
    className={classnames("btn-carousel", direction === -1 && "left")}
    onClick={() => slide(direction)}
  >
    <div className={classnames("arrow-container", direction === -1 && "left")}>
      <img src={arrow} alt="arrow" className="w-100" />
    </div>
  </div>
);

export default Arrow;
