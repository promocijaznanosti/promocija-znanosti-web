import React from "react";
import "./partners.scss";
import { partnersData } from "./partners-data";

const Partners = () => {
  return (
    <div className="pz-partners pz-slide">
      <div className="pz-slide-inner">
        <div className="pz-slide-title">Sponzori</div>
        <div className="partner-logos-container">
          {partnersData.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className="partner-image"
                src={partner.image}
                alt={partner.name}
                title={partner.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
