import React from "react";
import NegativeCheckbox from "../common/negative-checkbox";
import { LearnMore } from "monday-ui-react-core/icons";
import { useExport } from "../../context/export-context";

export default function ExportTableRow({ log, index }) {
  const { exportFormat, setExportFormat } = useExport();
  const parsedDate = new Date(log.startDate).toLocaleDateString();
  const parsedCreatedAt = new Date(log.createdAt).toLocaleDateString();
  //   log.startDate = new Date(log.startDate).toLocaleDateString();
  log.note = log.note.slice(0, 10) + "...";
  return (
    <tr>
      {Object.entries(log).map(([key, value], i) => {
        const negative =
          exportFormat?.columns.includes(i) ||
          exportFormat?.rows.includes(index);
        return (
          <td
            style={{
              backgroundColor: negative ? "var(--negative-color-selected)" : "",
              transition: "all 0.15s ease-in-out",
              color: negative ? "var(--secondary-text-color)" : "",
            }}
          >
            <div className="export-table__field-cont">
              {key === "note" && !negative ? (
                <LearnMore />
              ) : negative ? null : (
                <input
                  type="text"
                  className="export-table__field-input"
                  placeholder={
                    key === "startDate"
                      ? parsedDate
                      : key === "createdAt"
                      ? parsedCreatedAt
                      : value
                  }
                />
              )}
              {i === 0 ? (
                <div className="export-table__checkbox-cont">
                  <NegativeCheckbox
                    onChange={() => {
                      const newValue = exportFormat.rows.includes(index)
                        ? exportFormat?.rows.filter((val) => val !== index)
                        : [...exportFormat?.rows, index];
                      setExportFormat((prev) => ({
                        ...prev,
                        rows: newValue,
                      }));
                    }}
                  />
                </div>
              ) : null}
            </div>
          </td>
        );
      })}
    </tr>
  );
}
