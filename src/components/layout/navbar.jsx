import React from "react";
import "../../styles/layout/navbar.scss";
import { Link } from "monday-ui-react-core";
import Logo from "../../img/timing-logo.png";
import { navlinks } from "../../utils/data";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="navbar__links-cont">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              textClassName={`navbar__link ${
                window.location.pathname === link.href ? "highlight" : ""
              }`}
              text={link.text}
              href={link.href}
              target={Link.targets.SELF}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
