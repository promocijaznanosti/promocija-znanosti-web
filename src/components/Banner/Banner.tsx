import React from "react";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="pz-banner pz-slide">
      <img
        src={require("../../resources/banner/banner-logo.png")}
        alt="Institut za promociju znanosti logo"
        className="banner-logo"
      />
    </div>
  );
};

export default Banner;
