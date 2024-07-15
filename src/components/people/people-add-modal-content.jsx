import React from "react";
import "../../styles/people/people-table-modal.scss";
import { days, hoursOptions } from "../../utils/data";
import InputContainer from "../common/input-container.jsx";
import { Button, Checkbox, Dropdown, TextField } from "monday-ui-react-core";
import { Delete } from "monday-ui-react-core/icons";

export default function PeopleAddModalContent() {
  function addRateCard() {
    return null;
  }
  return (
    <div className="people-table-modal__content-cont">
      <div className="people-table-modal__inputs-cont">
        <InputContainer label={"User"} color={"var(--primary-color)"}>
          <Dropdown options={hoursOptions} className="dropdown input-width" />
        </InputContainer>
        <InputContainer label={"Role"} color={"var(--primary-color)"}>
          <TextField className="input-width" />
        </InputContainer>
        <InputContainer label={"Team"} color={"var(--primary-color)"}>
          <TextField className="input-width" />
        </InputContainer>
        <InputContainer label={"Hours"} color={"var(--primary-color)"}>
          <div className="work-schedule__content-cont">
            <InputContainer label={"Start time"}>
              <Dropdown options={hoursOptions} className="dropdown" />
            </InputContainer>
            <InputContainer label={"End time"}>
              <Dropdown options={hoursOptions} className="dropdown" />
            </InputContainer>
          </div>
        </InputContainer>
        <InputContainer label={"Days"} color={"var(--primary-color)"}>
          <div className="work-schedule__content-cont">
            {days.map((day, i) => (
              <Checkbox
                key={i}
                label={day}
                // checked={logDetails.customDays.includes(i)}
                // onChange={() => {
                //   let customDays = logDetails.customDays.includes(i)
                //     ? logDetails.customDays.filter((val) => val !== i)
                //     : [...logDetails.customDays, i];
                //   setLogDetails((prev) => ({
                //     ...prev,
                //     customDays: customDays,
                //   }));
                // }}
              />
            ))}
          </div>
        </InputContainer>
        <InputContainer label={"Rate"} color={"var(--primary-color)"}>
          <TextField className="input-width" />
        </InputContainer>
        <InputContainer label={"Currency"} color={"var(--primary-color)"}>
          <TextField className="input-width" />
        </InputContainer>
      </div>
    </div>
  );
}
