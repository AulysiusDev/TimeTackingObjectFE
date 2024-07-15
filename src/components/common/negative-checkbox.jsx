import React, { useState } from "react";
import "../../styles/common/negative-checkbox.scss";

export default function NegativeCheckbox({
  onChange = () => null,
  defaultValue = false,
}) {
  const [isChecked, setIsChecked] = useState(defaultValue);
  return (
    <div className="negative-checkbox__container">
      <input
        type="checkbox"
        className="negative-checkbox__input"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange();
        }}
        style={{
          backgroundColor: isChecked ? "red" : "",
          transform: isChecked ? "rotate(90deg)" : "rotate(-90deg)",
          transition: "all 0.2s ease-in-out",
        }}
      />
    </div>
  );
}
