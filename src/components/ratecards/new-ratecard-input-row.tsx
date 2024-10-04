import React, { useCallback, useMemo, useState } from "react";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import { Button, Checkbox, Dropdown } from "monday-ui-react-core";
import { useTheme } from "../../context/theme-context";
import { DropdownOption, NewRatecard } from "../../types";
import {
  currencyOptions,
  endTimeOptions,
  startTimeOptions,
  days,
  newRatecardObj,
} from "../../utils/data";
import toast from "react-hot-toast";

const NewRatecardInputRow: React.FC = () => {
  const { ratecardCategories, newRatecards, setNewRatecards } = useTheme();

  const [newRatecard, setNewRatecard] = useState<NewRatecard>(newRatecardObj);

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

  const handleTextInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
      console.log(e.target.value);
      setNewRatecard((prev: NewRatecard) => ({
        ...prev,
        [key]: e.target.value,
      }));
    },
    []
  );

  const handleDropdownInputChange = useCallback(
    (e: DropdownOption, key: string) => {
      setNewRatecard((prev: NewRatecard) => ({
        ...prev,
        [key]: e || "",
      }));
    },
    []
  );

  const handleCheckboxChange = useCallback((i: number) => {
    setNewRatecard((prev) => {
      const newDays = prev.days.includes(i)
        ? prev.days.filter((dayIndex) => dayIndex !== i)
        : [...prev.days, i];
      return {
        ...prev,
        days: newDays.sort((a, b) => a - b),
      };
    });
  }, []);

  const handleAddRateCard = useCallback(() => {
    if (!newRatecard.role) {
      toast.error("Please select a ratecard role");
      return;
    }
    if (!newRatecard.rate) {
      toast.error("Please enter a default ratecard rate");
      return;
    }

    setNewRatecards((prev: NewRatecard[]) => [...prev, newRatecard]);
    setNewRatecard(newRatecardObj);
  }, [newRatecard]);

  return (
    <section className="new-ratecard-input-row__new-ratecard-container">
      <article className="new-ratecard-input-row__new-ratecard-cont">
        <div className="new-ratecard-input-row__input-cont">
          <label htmlFor="role">
            Role<span style={{ color: "var(--negative-color)" }}>*</span>
          </label>
          <Dropdown
            className="new-ratecard-input-row__dropdown"
            size={Dropdown.sizes.SMALL}
            options={processedRolesOptions}
            onChange={(e: DropdownOption) =>
              handleDropdownInputChange(e, "role")
            }
            value={newRatecard.role}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label htmlFor="rate">
            Rate<span style={{ color: "var(--negative-color)" }}>*</span>
          </label>

          <input
            type="number"
            name="rate"
            className="input"
            onChange={(e) => handleTextInputChange(e, "rate")}
            value={newRatecard.rate}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label htmlFor="department">Department</label>
          <Dropdown
            className="new-ratecard-input-row__dropdown"
            size={Dropdown.sizes.SMALL}
            options={processedDeapartmentsOptions}
            onChange={(e: DropdownOption) =>
              handleDropdownInputChange(e, "department")
            }
            value={newRatecard.department}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label>Currency</label>
          <Dropdown
            className="new-ratecard-input-row__dropdown"
            size={Dropdown.sizes.SMALL}
            options={currencyOptions}
            onChange={(e: DropdownOption) =>
              handleDropdownInputChange(e, "currency")
            }
            value={newRatecard.currency}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label>Start time</label>
          <Dropdown
            name="department"
            className="new-ratecard-input-row__dropdown"
            size={Dropdown.sizes.SMALL}
            options={startTimeOptions}
            onChange={(e: DropdownOption) =>
              handleDropdownInputChange(e, "startTime")
            }
            value={newRatecard.startTime}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label>End time</label>
          <Dropdown
            className="new-ratecard-input-row__dropdown"
            size={Dropdown.sizes.SMALL}
            options={endTimeOptions}
            onChange={(e: DropdownOption) =>
              handleDropdownInputChange(e, "endTime")
            }
            value={newRatecard.endTime}
            menuPosition={Dropdown.menuPositions.FIXED}
          />
        </div>
        <div className="new-ratecard-input-row__input-cont">
          <label>Days</label>
          <div className="new-ratecard-input-row__checkboxes-cont">
            {days.map((day: string, i: number) => (
              <div className="new-ratecard-input-row__checkbox-cont">
                <p>{day.slice(0, 1)}</p>
                <Checkbox
                  checkboxClassName="new-ratecard-input-row__checkbox"
                  onChange={() => handleCheckboxChange(i)}
                  checked={newRatecard.days.includes(i)}
                />
              </div>
            ))}
          </div>
        </div>
      </article>
      <Button
        kind={Button.kinds.TERTIARY}
        size={Button.sizes.SMALL}
        onClick={handleAddRateCard}
      >
        Add ratecard
      </Button>
    </section>
  );
};

export default NewRatecardInputRow;
