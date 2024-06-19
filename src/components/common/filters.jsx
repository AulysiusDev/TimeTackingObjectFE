import React from "react";
import "../../styles/filters.scss";
import InputContainer from "./input-container";
import { TextField, Dropdown, Checkbox, Button } from "monday-ui-react-core";
import WeekPicker from "./week-picker";

export default function Filters() {
  return (
    <section className="filters__container">
      <div className="filters__wrapper">
        <section className="filters__side-section">
          <InputContainer>
            <Dropdown className="input-width" placeholder="Filter by user" />
          </InputContainer>
          <InputContainer>
            <WeekPicker />
          </InputContainer>
        </section>
        <section className="filters__side-section"></section>
      </div>
    </section>
  );
}
