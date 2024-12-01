import React from "react";
import { IoHomeOutline } from "react-icons/io5";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <IoHomeOutline />
        <h3 className="about__title">Experiance</h3>
        <span className="about__subtitle">8 years work</span>
      </div>
      <div className="about__box">
        <IoHomeOutline />
        <h3 className="about__title">Experiance</h3>
        <span className="about__subtitle">8 years work</span>
      </div>
      <div className="about__box">
        <IoHomeOutline />
        <h3 className="about__title">Experiance</h3>
        <span className="about__subtitle">8 years work</span>
      </div>
    </div>
  );
};

export default Info;
