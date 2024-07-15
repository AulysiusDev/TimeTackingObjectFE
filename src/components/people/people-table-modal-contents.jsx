import React from "react";
import "../../styles/people/people-table-modal.scss";
import InputContainer from "../common/input-container";
import { Button, Checkbox, Dropdown, TextField } from "monday-ui-react-core";
import { days, hoursOptions } from "../../utils/data";
import { Delete } from "monday-ui-react-core/icons";

export default function PeopleTableModalContents({ person }) {
  function deleteRateCard() {
    return null;
  }
  return (
    <div className="people-table-modal__content-cont">
      <div className="people-table-modal__inputs-cont">
        <InputContainer label={"Role"} color={"var(--primary-color)"}>
          <TextField placeholder={person?.role} className="input-width" />
        </InputContainer>
        <InputContainer label={"Team"} color={"var(--primary-color)"}>
          <TextField placeholder={person?.team} className="input-width" />
        </InputContainer>
        <InputContainer label={"Hours"} color={"var(--primary-color)"}>
          <div className="work-schedule__content-cont">
            <InputContainer label={"Start time"}>
              <Dropdown
                options={hoursOptions}
                searchable
                className="dropdown"
                placeholder={
                  hoursOptions[
                    hoursOptions.findIndex(
                      (option) => option?.label === person?.startTime
                    )
                  ]?.label
                }
              />
            </InputContainer>
            <InputContainer label={"End time"}>
              <Dropdown
                options={hoursOptions}
                className="dropdown"
                searchable
                placeholder={
                  hoursOptions[
                    hoursOptions.findIndex(
                      (option) => option?.label === person?.endTime
                    )
                  ]?.label
                }
              />
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
          <TextField className="input-width" placeholder={person?.rate} />
        </InputContainer>
        <InputContainer label={"Currency"} color={"var(--primary-color)"}>
          <TextField className="input-width" placeholder={person?.currency} />
        </InputContainer>
        <div className="people-table-modal__delete-cont">
          <Button
            onClick={deleteRateCard}
            leftIcon={Delete}
            color={Button.colors.NEGATIVE}
            tooltipContent="Delete Automation"
            size={Button.sizes.SMALL}
          >
            Delete rate card
          </Button>
        </div>
      </div>
    </div>
  );
}
