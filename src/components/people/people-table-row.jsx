import React, { useState } from "react";
import "../../styles/people/people-table-body.scss";
import PeopleTableModal from "./people-table-modal";
import { days } from "../../utils/data";
import { usePeople } from "../../context/people-context";

const person = {
  name: "Steven Jacobs",
  role: "Developer",
  photoThumb: null,
  startTime: "09:00",
  endTime: "18:00",
  days: [1, 2, 3, 4, 5],
  rate: "180",
  currency: "GBP",
  team: "Marketing",
};

function isWeekdays(days) {
  const weekdays = [1, 2, 3, 4, 5];
  return (
    days.length === weekdays.length &&
    days.every((day, i) => day === weekdays[i])
  );
}

export default function PeopleTableRow() {
  const { setShowPeopleModal } = usePeople();
  return (
    <>
      <PeopleTableModal person={person} />
      <tr
        className="people-table-body__row"
        onClick={() => setShowPeopleModal(true)}
      >
        <td className="people-table-body__field people-comp__field-width">
          <span>{person.name}</span>
          <span>{person.role}</span>
        </td>
        <td className="people-table-body__field people-comp__field-width">
          {person.team}
        </td>
        <td className="people-table-body__field people-comp__field-width">
          {person.startTime} - {person.endTime}
        </td>
        <td className="people-table-body__field people-comp__field-width">
          {isWeekdays(person.days)
            ? "Monday - Friday"
            : person.days.map((day) => days[day]).join(", ")}
        </td>
        <td className="people-table-body__field people-comp__field-width">
          {person.rate}
        </td>
        <td className="people-table-body__field people-comp__field-width">
          {person.currency}
        </td>
      </tr>
    </>
  );
}
