import React from "react";
import "../../styles/navbar.scss";
import { Link } from "monday-ui-react-core";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="navbar__logo" />
        <div className="navbar__links-cont">
          <Link className="navbar__link" text="Timelogs" />
          <Link className="navbar__link" text="Ratecards" />
          <Link className="navbar__link" text="Settings" />
        </div>
      </div>
    </div>
  );
}
