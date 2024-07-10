import React from "react";
import "../../styles/people/people-table-body.scss";
import "../../styles/people/people-comp.scss";
import PeopleTableModal from "./people-table-modal";
import { days } from "../../utils/data";
import { usePeople } from "../../context/people-context";
import { isWeekdays } from "../../utils/helpers";

export default function PeopleTableRow({ person }) {
  const { setShowPeopleModal } = usePeople();
  return (
    <>
      <tr
        className="people-table-body__row"
        onClick={() => setShowPeopleModal(true)}
      >
        <td className="people-table-body__field people-comp__body-width">
          <div className="people-table-body__user-field">
            <span style={{ fontWeight: "600" }}>{person.name}</span>
            <span
              style={{
                color: "var(--secondary-text-color)",
                fontStyle: "italic",
              }}
            >
              {person.role}
            </span>
          </div>
        </td>
        <td
          className="people-table-body__field people-comp__body-width"
          style={{ fontWeight: "600" }}
        >
          {person.team}
        </td>
        <td className="people-table-body__field people-comp__body-width">
          {person.startTime} - {person.endTime}
        </td>
        <td className="people-table-body__field people-comp__body-width">
          {isWeekdays(person.days)
            ? "Monday - Friday"
            : person.days.map((day) => days[day]).join(", ")}
        </td>
        <td
          className="people-table-body__field people-comp__body-width"
          style={{ fontWeight: "600" }}
        >
          {person.rate}
        </td>
        <td className="people-table-body__field people-comp__body-width">
          {person.currency}
        </td>
      </tr>
      <PeopleTableModal person={person} />
    </>
  );
}
