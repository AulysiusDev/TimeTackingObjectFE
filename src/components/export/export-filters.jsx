import React, { useState } from "react";
import "../../styles/export/export-filters.scss";
import { Button, Checkbox, DatePicker, Dropdown } from "monday-ui-react-core";
import InputContainer from "../common/input-container";

export default function ExportFilters({ generated, setGenerated }) {
  return (
    <section className="export-filters__container">
      <div className="export-filters__dropdowns-cont">
        <Dropdown
          className="input-width dropdown"
          placeholder="Filter by user"
        />
        <Dropdown
          className="input-width dropdown"
          placeholder="Filter by team"
        />
        <Dropdown
          className="input-width dropdown"
          placeholder="Filter by board"
        />
        <Dropdown
          className="input-width dropdown"
          placeholder="Filter by item"
        />
      </div>
      <div className="export-filters__options-cont">
        <InputContainer
          label={"Select date range"}
          color={"var(--primary-color)"}
        >
          <DatePicker className="export-filters__date-picker" />
        </InputContainer>
        <InputContainer label={"Formats"} color={"var(--primary-color)"}>
          <div className="export-filters__checkbox-cont">
            <Checkbox label={".CSV"} />
            <Checkbox label={".XLXS"} />
          </div>
        </InputContainer>
      </div>
      <article className="export-filters__button-cont">
        <Button
          onClick={() => setGenerated(!generated)}
          size={Button.sizes.LARGE}
        >
          {generated ? "Re-Generate" : "Generate"}
        </Button>
        <Button
          onClick={() => setGenerated(!generated)}
          disabled={!generated}
          kind={Button.kinds.SECONDARY}
          size={Button.sizes.LARGE}
        >
          Export
        </Button>
      </article>
    </section>
  );
}
