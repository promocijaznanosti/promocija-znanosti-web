import React from "react";
import { Link } from "react-router-dom";
import { headerData } from "../Header/header-data";
import "./footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="pz-footer-border"></div>
      <div className="pz-footer">
        <div className="left">
          <img
            src={require("../../resources/promocija-znanosti-logo.png")}
            alt="Logotip Instituta promocije znanosti"
            className="logo"
          />
          <div>
            <div className="title">Institut za promociju znanosti</div>
            <div>Šegrta Hlapića 19</div>
            <div>10000 Zagreb</div>
          </div>
        </div>
        <div className="right">
          <div className="navigation">
            {headerData.map((entry) => (
              <Link to={entry.href} key={entry.key}>
                {entry.title}
              </Link>
            ))}
          </div>
          <div className="copyright">
            ©{new Date().getFullYear()} <b>Institut za promociju znanosti</b>.
            Sva prava pridržana
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
