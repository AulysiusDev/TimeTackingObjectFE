import React from "react";
import "../../styles/entries/hours-count.scss";

export default function HoursCount({ title, children }) {
  return (
    <section className="hours-count__container">
      <h1 className="hours-count__title">{title}</h1>
      <p className="hours-count__text">{children}</p>
    </section>
  );
}
