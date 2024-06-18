import React from "react";
import "../../styles/filters.scss";
import InputContainer from "./input-container";
import { TextField, Dropdown, Checkbox, Button } from "monday-ui-react-core";

export default function Filters() {
  return (
    <section className="filters__container">
      <div className="filters__wrapper">
        <section className="filters__side-section">
          <InputContainer label={"Select user"}>
            <Dropdown className="input-width" />
          </InputContainer>
          <InputContainer label={"Start date"}>
            <TextField className="input-width" type={TextField.types.DATE} />
          </InputContainer>
        </section>
        <section className="filters__side-section">
          <Button />
        </section>
      </div>
    </section>
  );
}
