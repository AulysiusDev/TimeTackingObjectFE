import React from "react";
import "../../styles/entries/days-header.scss";
import { days } from "../../utils/data";
import { IconButton } from "monday-ui-react-core";
import { Add } from "monday-ui-react-core/icons";

export default function DaysHeader({ date, i }) {
  return (
    <div className="days-header__container">
      <IconButton
        icon={Add}
        className="days-header__icon"
        size={IconButton.sizes.S}
      />
      <h1 className="days-header__day">{days[i]}</h1>
      <h2 className="days-header__date">{date}</h2>
    </div>
  );
}
