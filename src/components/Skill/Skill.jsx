import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./skill.css";
const Skill = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Skills</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </div>
  );
};

export default Skill;
