import React, { useState } from "react";
import "../../styles/common/negative-checkbox.scss";

export default function NegativeCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="negative-checkbox__container">
      <input
        type="checkbox"
        className="negative-checkbox__input"
        checked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        style={{ backgroundColor: isChecked ? "red" : "" }}
      />
    </div>
  );
}
