import React from "react";
import "./work.css";
import workData from "./works";
import Card from "./Card";

const Work = () => {
  return (
    <div className="work__section">
      <div className="work__container container">
        <div className="section__header flex">
          <div>
            <h2 className="section__title">My Projects</h2>
            <span className="section__subtitle">Few Of My Works</span>
          </div>
          <div>
            <p className="ready-work">Ready for another project</p>
          </div>
        </div>
        <ul className="work__content grid">
          {workData.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Work;
