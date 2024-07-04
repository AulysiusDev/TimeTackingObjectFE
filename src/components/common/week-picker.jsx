import React from "react";
import "../../styles/common/week-picker.scss";
import { HonestWeekPicker } from "./honest-Week-picker";
import { useEntries } from "../../context/entries-context";
import { Button } from "monday-ui-react-core";
import { endOfWeek, startOfWeek } from "date-fns";

export default function WeekPicker() {
  const { setWeek } = useEntries();

  function onChange(data) {
    setWeek(data);
  }
  return (
    <div className="week-picker__container">
      <HonestWeekPicker onChange={onChange} />
      <Button
        size={Button.sizes.MEDIUM}
        kind={Button.kinds.SECONDARY}
        className="week-picker__button"
        onClick={() => {
          setWeek({
            firstDay: startOfWeek(new Date(), { weekStartsOn: 1 }),
            lastDay: endOfWeek(new Date(), { weekStartsOn: 1 }),
          });
        }}
      >
        Current Week
      </Button>
    </div>
  );
}
