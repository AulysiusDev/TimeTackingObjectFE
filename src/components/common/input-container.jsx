import React from "react";
import "../../styles/common/input-container.scss";

export default function InputContainer({ children, label }) {
  return (
    <div className="input-container__container">
      <label className="input-container__label">{label}</label>
      {children}
    </div>
  );
}
