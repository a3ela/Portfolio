import React from "react";
import { SendIcon, HandIcon } from "../../icons";
const Data = () => {
  return (
    <div className="hero__data">
      <h1 className="hero__title">
        Abel.S
        <HandIcon />
      </h1>
      <h3 className="hero__subtitle">FullStackEngineer</h3>
      <p className="hero__description">a passionate developer</p>
      <a href="#contact" className="btn btn--flex">
        Say Hello
        <SendIcon />
      </a>
    </div>
  );
};

export default Data;
