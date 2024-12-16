import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";

import "./skills.css";
const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section__header container">
        <h1 className="section__title">Skills</h1>
        <h2 className="section__subtitle">My talents</h2>
        <hr className="section__line" />
      </div>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
