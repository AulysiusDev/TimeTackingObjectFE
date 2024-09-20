import React, { useMemo } from "react";
import "../../styles/common/filters.scss";
import InputContainer from "./input-container";
import { Dropdown } from "monday-ui-react-core";
import WeekPicker from "./week-picker";
import { useTheme } from "../../context/theme-context";

const Filters: React.FC = () => {
  const { mondayData } = useTheme();

  const memorizedUserOptions = useMemo(() => {
    // Sort the data!
    return mondayData.users;
  }, [mondayData.users]);
  return (
    <section className="filters__container">
      <div className="filters__wrapper">
        <section className="filters__side-section">
          <InputContainer>
            <Dropdown
              className="input-width dropdown"
              placeholder="Filter by user"
              options={memorizedUserOptions}
            />
          </InputContainer>
          <InputContainer>
            <Dropdown
              className="input-width dropdown"
              placeholder="Filter by team"
            />
          </InputContainer>
          <InputContainer>
            <Dropdown
              className="input-width dropdown"
              placeholder="Filter by board"
            />
          </InputContainer>
          <InputContainer>
            <WeekPicker />
          </InputContainer>
        </section>
      </div>
    </section>
  );
};
export default Filters;
