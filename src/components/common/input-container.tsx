import React, { CSSProperties, ReactNode } from "react";
import "../../styles/common/input-container.scss";

interface InputContainerProps {
  children: ReactNode;
  label?: string;
  color?: string;
  styles?: CSSProperties;
}

const InputContainer: React.FC<InputContainerProps> = ({
  children,
  label,
  color,
  styles = {},
}) => {
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
};
export default InputContainer;
