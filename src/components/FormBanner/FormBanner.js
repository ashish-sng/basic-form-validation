import React, { useState } from "react";
import "./FormBanner.css";
import TitleLogo from "./TitleLogo/Logo";

const FormBanner = () => {
  const [displayArrow, setDisplayArrow] = useState(window.innerWidth < 550);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 550) {
      setDisplayArrow(true);
    } else {
      setDisplayArrow(false);
    }
  });

  return (
    <div className="form__banner">
      <TitleLogo />
      {displayArrow && (
        <div className="arrow bounce">
          <span class="fa fa-arrow-up fa-2x" href="#"></span>
        </div>
      )}
    </div>
  );
};

export default FormBanner;
