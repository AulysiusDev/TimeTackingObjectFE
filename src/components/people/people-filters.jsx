import React from "react";
import "../../styles/people/people-filters.scss";
import { Button, Dropdown, Search } from "monday-ui-react-core";

export default function PeopleFilters() {
  return (
    <section className="people-filters__container">
      <Search
        placeholder="Search filter"
        className="placeholder people-filters__search"
      />
      <Button
        kind={Button.kinds.SECONDARY}
        className="placeholder"
        style={{ color: "var(--secondary-text-color)" }}
      >
        Select days
      </Button>
      <Dropdown
        className="input-width dropdown placeholder"
        placeholder="Select board"
      />
      <Dropdown
        className="input-width dropdown placeholder"
        placeholder="Select rate range"
      />
      <Dropdown
        className="input-width dropdown placeholder"
        placeholder="Select currency"
      />
    </section>
  );
}
