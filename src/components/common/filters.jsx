import React from "react";
import "../../styles/common/filters.scss";
import InputContainer from "./input-container";
import { Dropdown } from "monday-ui-react-core";
import WeekPicker from "./week-picker";

export default function Filters() {
  return (
    <section className="filters__container">
      <div className="filters__wrapper">
        <section className="filters__side-section">
          <InputContainer>
            <Dropdown
              className="input-width work-schedule__dropdown"
              placeholder="Filter by user"
            />
          </InputContainer>
          <InputContainer>
            <Dropdown
              className="input-width work-schedule__dropdown"
              placeholder="Filter by team"
            />
          </InputContainer>
          <InputContainer>
            <Dropdown
              className="input-width work-schedule__dropdown"
              placeholder="Filter by board"
            />
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
