import React from "react";
import "../../styles/common/input-container.scss";

export default function InputContainer({
  children,
  label,
  color,
  styles = {},
}) {
  return (
    <div className="input-container__container" style={styles}>
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
