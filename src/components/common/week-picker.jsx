import React from "react";
import "../../styles/week-picker.scss";
import { HonestWeekPicker } from "./honest-Week-picker";
import { useGeneral } from "../../context";
import { Button } from "monday-ui-react-core";
import { addMonths, endOfWeek, startOfWeek, subMonths } from "date-fns";

export default function WeekPicker() {
  const { week, setWeek } = useGeneral();

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
