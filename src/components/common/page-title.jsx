import React from "react";

export default function PageTitle({ children, styles = {} }) {
  return (
    <h1 className="page-title" style={styles}>
      {children}
    </h1>
  );
}
