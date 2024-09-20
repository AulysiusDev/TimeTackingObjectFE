import React, { CSSProperties } from "react";

interface PageTitleProps {
  children: string;
  styles?: CSSProperties;
}

const PageTitle: React.FC<PageTitleProps> = ({ children, styles = {} }) => {
  return (
    <h1 className="page-title" style={styles}>
      {children}
    </h1>
  );
};
export default PageTitle;
