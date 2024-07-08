import React from "react";
import "../../styles/common/input-container.scss";

export default function InputContainer({ children, label, color }) {
  return (
    <div className="input-container__container">
      {label ? (
        <label
          className="input-container__label"
          style={{ color: color ? color : "var(--secondary-text-color)" }}
        >
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
}
