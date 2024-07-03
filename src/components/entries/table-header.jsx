import React from "react";
import { useEntries } from "../../context/entries-context";
import DaysHeader from "./days-header";
import TableActions from "./table-actions";

export default function TableHeader() {
  const { datesArr } = useEntries();
  return (
    <thead>
      <tr className="week-table__header-row">
        <td
          className="week-table__header-column"
          style={{
            width: "40%",
            color: "var(--primary-color)",
            backgroundColor: "var(--grey-background-color)",
          }}
        >
          <TableActions />
        </td>
        {datesArr &&
          datesArr.map((date, i) => {
            return (
              <td className="week-table__header-column">
                <DaysHeader date={date} i={i} />
              </td>
            );
          })}
        <td
          className="week-table__header-column"
          style={{
            width: "6.5%",
            color: "var(--primary-color)",
            fontWeight: "600",
            fontSize: "22.5px",
            alignItems: "flex-end",
          }}
        >
          Total
        </td>
      </tr>
    </thead>
  );
}
