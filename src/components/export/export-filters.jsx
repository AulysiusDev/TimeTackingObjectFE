import React from "react";
import "../../styles/export/export-filters.scss";
import { Checkbox, DatePicker, Dropdown } from "monday-ui-react-core";
import InputContainer from "../common/input-container";

export default function ExportFilters() {
  return (
    <section className="export-filters__container">
      <InputContainer styles={{ margin: "-17.5px 70px 0 0" }}>
        <DatePicker />
      </InputContainer>
      <InputContainer>
        <Dropdown
          className="input-width export-filters__dropdown"
          placeholder="Filter by user"
        />
      </InputContainer>
      <InputContainer>
        <Dropdown
          className="input-width export-filters__dropdown"
          placeholder="Filter by team"
        />
      </InputContainer>
      <InputContainer>
        <Dropdown
          className="input-width export-filters__dropdown"
          placeholder="Filter by board"
        />
      </InputContainer>
      <InputContainer
        label={"Formats"}
        color={"var(--primary-color)"}
        styles={{ marginLeft: "40px" }}
      >
        <div className="export-filters__checkbox-cont">
          <Checkbox label={".CSV"} />
          <Checkbox label={".XLXS"} />
        </div>
      </InputContainer>
    </section>
  );
}
