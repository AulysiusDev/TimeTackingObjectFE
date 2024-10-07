import React, { useCallback, useMemo } from "react";
import { DropdownOption, StoredRatecard } from "../../types";
import { useTheme } from "../../context/theme-context";
import { CloseSmall, Delete } from "monday-ui-react-core/icons";
import {
  days,
  currencyOptions,
  startTimeOptions,
  endTimeOptions,
} from "../../utils/data";
import { Checkbox, Dropdown } from "monday-ui-react-core";

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
  console.log({ ratecard });
  console.log({ days });
  const dayAbbreviations = days.map((day) => day.slice(0, 2));
  const formattedRatecard = useMemo(() => {
    return {
      role:
        ratecard.role &&
        ratecard.role.slice(0, 1).toUpperCase() + ratecard.role.slice(1),
      rate: ratecard.rate,
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
  console.log({ formattedRatecard });
  const processedDeapartmentsOptions: DropdownOption[] = useMemo(() => {
    if (!ratecardCategories || !ratecardCategories.team) return [];
    return Object.keys(ratecardCategories.team).map(
      (department: string, i: number) => {
        return {
          id: i,
          label: department.slice(0, 1).toUpperCase() + department.slice(1),
          value: department,
        };
      }
    );
  }, [ratecardCategories]);
  const processedRolesOptions: DropdownOption[] = useMemo(() => {
    if (!ratecardCategories || !ratecardCategories.role) return [];
    return Object.keys(ratecardCategories.role).map(
      (role: string, i: number) => {
        return {
          id: i,
          label: role.slice(0, 1).toUpperCase() + role.slice(1),
          value: role,
        };
      }
    );
  }, [ratecardCategories]);

  const options = {
    role: processedRolesOptions,
    department: processedDeapartmentsOptions,
    currency: currencyOptions,
    startTime: startTimeOptions,
    endTime: endTimeOptions,
  };
  console.log({ options });
  console.log({ dayAbbreviations });
  return (
    <tr className="ratecards-manage-modal-content__row-cont">
      {Object.entries(formattedRatecard).map(([key, value], i) => {
        console.log({ value });
        console.log(
          key === "days" && typeof value === "string"
            ? value.replace(/\s/g, "").split(",")
            : null
        );
        return (
          <td key={i} className="ratecards-manage-modal-content__body-cont">
            {key === "rate" ? (
              <div className="new-ratecard-input-row__input-cont">
                <input
                  type="number"
                  name="rate"
                  className="input"
                  defaultValue={value}
                />
              </div>
            ) : key !== "days" ? (
              <div className="new-ratecard-input-row__input-cont">
                {value ? (
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
                ) : null}
              </div>
            ) : (
              <div className="new-ratecard-input-row__checkboxes-cont">
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
        );
      })}
    </tr>
  );
};

export default StoredRatecardInputRow;
