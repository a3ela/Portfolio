import React from "react";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import react from "../../assets/react.svg";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h2 className="skills__title">Frontend Developer</h2>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={html} alt="html-logo" />
            <h2 className="sklls__name">HTML</h2>
          </div>

          <div className="skills__data">
            <img src={css} alt="html-logo" />
            <h2 className="sklls__name">Css</h2>
          </div>

          <div className="skills__data">
            <img src={javascript} alt="html-logo" />
            <h2 className="sklls__name">JavaScript</h2>
          </div>

          <div className="skills__data">
            <img src={react} alt="html-logo" />
            <h2 className="sklls__name">ReactJS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
