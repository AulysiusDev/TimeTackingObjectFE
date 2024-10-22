import React from "react";
import NegativeCheckbox from "../common/negative-checkbox";
import { LearnMore } from "monday-ui-react-core/icons";
import { useExport } from "../../context/export-context";
import { LogEntry } from "../../types";
import { Tooltip } from "monday-ui-react-core";

interface ExportTableRowProps {
  log: LogEntry;
  index: number;
}

const ExportTableRow: React.FC<ExportTableRowProps> = ({ log, index }) => {
  const { exportFormat, setExportFormat } = useExport();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };

  const parsedDate = new Date(log.startDate).toLocaleDateString('en-GB', options); 
  const parsedCreatedAt = new Date(log.createdAt).toLocaleDateString('en-GB', options);
  const parsedUpdatedAt = new Date(log.updatedAt).toLocaleDateString('en-GB', options);
  console.log({parsedDate})
  //   log.startDate = new Date(log.startDate).toLocaleDateString();
  return (
    <tr>
      {Object.entries(log).map(([key, value], i) => {
        const negative =
          exportFormat?.columns.includes(i) ||
          exportFormat?.rows.includes(index);
          return <> {i === 0 ? <td>
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

          </td>: null}
          <td
            style={{
              backgroundColor: negative ? "var(--negative-color-selected)" : "",
              transition: "all 0.15s ease-in-out",
              color: negative ? "var(--secondary-text-color)" : "",
            }}
          >
            <div className="export-table__field-cont">
              {key === "note" && !negative ? (
                <Tooltip content={value} forceRenderWithoutChildren={false}>
                  <LearnMore/>
                </Tooltip>
              ) : negative ? null : (
                <p>{
                  key === "startDate"
                    ? parsedDate
                    : key === "createdAt"
                    ? parsedCreatedAt
                    : key === "updatedAt" 
                    ? parsedUpdatedAt
                    : value
                }</p>
               
              )}
         
            </div>
          </td>
          </>
      })}
    </tr>
  );
}

export default ExportTableRow
