import React from "react";
import "./work.css";
const Work = () => {
  return (
    <div className="work__section">
      <div className="work__container">
        <ul className="work__content grid">
          <li className="card" id="card1">
            <div className="card__body">
              <h2>card1</h2>
            </div>
          </li>
          <li className="card" id="card2">
            <div className="card__body">
              <h2>card2</h2>
            </div>
          </li>
          <li className="card" id="card3">
            <div className="card__body">
              <h2>card3</h2>
            </div>
          </li>
          <li className="card" id="card4">
            <div className="card__body">
              <h2>card4</h2>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
