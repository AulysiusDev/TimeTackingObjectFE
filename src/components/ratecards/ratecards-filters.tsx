import React from "react";
import "../../styles/ratecards/ratecards-filters.scss";
import { Button, Dropdown, Search } from "monday-ui-react-core";

const RatecardsFilters: React.FC = () => {
  return (
    <section className="ratecards-filters__container">
      <Search
        placeholder="Search filter"
        className="placeholder ratecards-filters__search"
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
};
export default RatecardsFilters;
