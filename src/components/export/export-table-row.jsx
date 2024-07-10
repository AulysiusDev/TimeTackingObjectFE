import { Checkbox } from "monday-ui-react-core";
import React from "react";
import NegativeCheckbox from "../common/negative-checkbox";

export default function ExportTableRow({ log }) {
  const parsedDate = new Date(log.startDate).toLocaleDateString();
  const parsedCreatedAt = new Date(log.createdAt).toLocaleDateString();
  //   log.startDate = new Date(log.startDate).toLocaleDateString();
  log.note = log.note.slice(0, 10) + "...";
  return (
    <tr>
      {Object.entries(log).map(([key, value], i) => {
        return (
          <td>
            {key === "startDate"
              ? parsedDate
              : key === "createdAt"
              ? parsedCreatedAt
              : value}
            {i === 0 ? (
              <div className="export-table__checkbox-cont">
                <NegativeCheckbox />
              </div>
            ) : null}
          </td>
        );
      })}
    </tr>
  );
}
