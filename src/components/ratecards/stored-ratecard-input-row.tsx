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
import { Dropdown } from "monday-ui-react-core";

interface StoredRatecardInputRowProps {
  ratecard: StoredRatecard;
}

const StoredRatecardInputRow: React.FC<StoredRatecardInputRowProps> = ({
  ratecard,
}) => {
  const { ratecardCategories } = useTheme();
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
      days: ratecard.days.map((day, i) => days[i].slice(0, 2)).join(",  "),
    };
  }, [ratecard]);

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
  return (
    <tr className="ratecards-manage-modal-content__row-cont">
      {Object.entries(formattedRatecard).map(([key, value], i) => {
        console.log({ value });
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
                <Dropdown
                  className="new-ratecard-input-row__dropdown"
                  size={Dropdown.sizes.SMALL}
                  options={options[key]}
                  defaultValue={
                    options[key].find(
                      (obj: DropdownOption) => obj.label === value
                    ) || {}
                  }
                  //   onChange={(e: DropdownOption) =>
                  //     handleDropdownInputChange(e, "department")
                  //   }
                  //   value={newRatecard.department}
                  menuPosition={Dropdown.menuPositions.FIXED}
                />
              </div>
            ) : null}
          </td>
        );
      })}
    </tr>
  );
};

export default StoredRatecardInputRow;
