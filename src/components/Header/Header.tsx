import React from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "./header-data";

const Header = () => {
  return (
    <div className="pz-header">
      <Link to="/" className="title">
        Institut za promociju znanosti
      </Link>
      <div className="nav-items">
        {headerData.map((entry) => (
          <NavLink to={entry.href} key={entry.key}>
            {entry.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
