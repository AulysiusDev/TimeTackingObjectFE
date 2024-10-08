import React, { useCallback, useMemo } from "react";
import { DropdownOption, StoredRatecard } from "../../types";
import { useTheme } from "../../context/theme-context";
import {Check, CloseSmall, Delete } from "monday-ui-react-core/icons";
import {
  days,
  currencyOptions,
  startTimeOptions,
  endTimeOptions,
} from "../../utils/data";
import { Checkbox, Dropdown } from "monday-ui-react-core";
import "../../styles/ratecards/ratecards-client-modal-content.scss"
import { processDropdownOptions } from "../../utils/helpers";

interface StoredRatecardInputRowProps {
  ratecard: StoredRatecard;
}
interface formattedRatecard {
  role: string;
  rate: number;
  enTime: string;
  startTime: string;
}

const StoredRatecardInputRow: React.FC<StoredRatecardInputRowProps> = ({
  ratecard,
}) => {
  const { ratecardCategories } = useTheme();
  const dayAbbreviations = days.map((day) => day.slice(0, 2));
  const formattedRatecard = useMemo(() => {
    return {
      role:
        ratecard.role &&
        ratecard.role.slice(0, 1).toUpperCase() + ratecard.role.slice(1),
      rate: ratecard.rate,
      user: null,
      department:
        ratecard.department &&
        ratecard.department.slice(0, 1).toUpperCase() +
          ratecard.department.slice(1),
      currency: ratecard.currency && ratecard.currency.toUpperCase(),
      startTime: ratecard.startTime,
      endTime: ratecard.endTime,
      days: !ratecard.days.length
        ? []
        : ratecard.days.map((day, i) => dayAbbreviations[i]).join(",  "),
    };
  }, [ratecard]);

  const processedDeapartmentsOptions: DropdownOption[] = useMemo(() => {
    return processDropdownOptions(Object.keys(ratecardCategories.team))
  }, [ratecardCategories]);

  const processedRolesOptions: DropdownOption[] = useMemo(() => {
    return processDropdownOptions(Object.keys(ratecardCategories.role))
  }, [ratecardCategories]);

  const options = {
    role: processedRolesOptions,
    department: processedDeapartmentsOptions,
    // User options will be all the users related to that ratecrad in the UserRatecardTable
    user: [],
    currency: currencyOptions,
    startTime: startTimeOptions,
    endTime: endTimeOptions,
  };
  return (
    <tr className="ratecards-client-modal-content__row-cont">
      {Object.entries(formattedRatecard).map(([key, value], i) => {
        return (<>
          {i === 0 ? 
  <td className="ratecards-client-modal-content__body-cont">
  <Check className="icon" color="var(--positive-color)"/>
  </td>
    : null       
          }
          <td key={i} className="ratecards-client-modal-content__body-cont">
            {key === "rate" ? (
              <div className="new-ratecard-input-row__input-cont">
                <input
                  type="number"
                  name="rate"
                  className="input"
                  defaultValue={value}
                />
              </div>
            ) : 
            key !== "days" && key !== "department" ? (
              <div className="new-ratecard-input-row__input-cont">
                  <Dropdown
                    className="new-ratecard-input-row__dropdown"
                    size={Dropdown.sizes.SMALL}
                    options={options[key]}
                    defaultValue={
                      options[key].find(
                        (obj: DropdownOption) =>
                          obj.label == value || obj.value == value
                      ) || null
                    }
                    menuPosition={Dropdown.menuPositions.FIXED}
                  />
              </div>
            ) : key === "department" ? 
          
              <div className="ratecards-client-modal-content__department-cont">
                <h3>{value}</h3>
              </div> :

             
            (
              <div className="ratecards-client-modal-content__checkboxes-cont">
                {days.map((day: string, i: number) => (
                  <div
                    className="new-ratecard-input-row__checkbox-cont"
                    key={day}
                  >
                    <p>{day.slice(0, 1)}</p>
                    <Checkbox
                      checkboxClassName="new-ratecard-input-row__checkbox"
                      checked={
                        typeof value === "string" &&
                        value
                          .replace(/\s/g, "")
                          .split(",")
                          .includes(dayAbbreviations[i])
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </td>
          </>
        );
      })}
    </tr>
  );
};

export default StoredRatecardInputRow;
