import React from "react";
import InputContainer from "../common/input-container";
import { Checkbox } from "monday-ui-react-core";
import { useEntries } from "../../context/entries-context.jsx";

export default function TableActions() {
  const { selectedItems, setSelectedItems } = useEntries();
  return (
    <div className="week-table__header-actions">
      <InputContainer>
        {/* Add all items to the selectedItems */}
        <Checkbox onChange={(e) => console.log(e.target.checked)} />
      </InputContainer>
    </div>
  );
}
