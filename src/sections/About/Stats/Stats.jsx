import React from "react";
import "./Stats.scss";

const statsData = [
  { label: ".experience", value: "1.4 years" },
  { label: ".location", value: "Addis Ababa, Ethiopia" },
  { label: ".availability", value: "Open for Full-time" },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__container">
        {statsData.map((stat, index) => (
          <div key={index} className="stats__item">
            <div className="stats__header">
              <span className="stats__label">{stat.label}</span>
              <div className="stats__line" />
            </div>
            <div className="stats__value">{stat.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
