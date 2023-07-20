import React from "react";
import "./Logo.css";
import bannerLogo from "../../../images/bannerLogo.png";

const Logo = () => {
  return (
    <div className="title__logo">
      <img src={bannerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
