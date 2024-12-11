import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <FaUserGraduate />
        <h3 className="about__title">Degree</h3>
        <span className="about__subtitle">Computer Science</span>
      </div>
      <div className="about__box">
        <FaLocationDot />
        <h3 className="about__title">Location</h3>
        <span className="about__subtitle">Ethiopia</span>
      </div>
      <div className="about__box">
        <FaComputer />
        <h3 className="about__title">Experiance</h3>
        <span className="about__subtitle">3 years work</span>
      </div>
    </div>
  );
};

export default Info;
