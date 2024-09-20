import React from "react";
import "../../styles/ratecards/ratecards-table-modal.scss";
import { days, hoursOptions } from "../../utils/data.js";
import InputContainer from "../common/input-container";
import { Button, Checkbox, Dropdown, TextField } from "monday-ui-react-core";
import { Delete } from "monday-ui-react-core/icons";

const RatecardsAddModalContent: React.FC = () => {
  function addRateCard() {
    return null;
  }
  return (
    <div className="ratecards-table-modal__content-cont">
      <div className="ratecards-table-modal__inputs-cont">
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
};
export default RatecardsAddModalContent;
