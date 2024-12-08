import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

import "./qualification.css";
const Qualification = () => {
  return (
    <div className="qualification section">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__btn btn--flex qualification-active">
            <RiGraduationCapLine className="qualification__icon" />
            Education
          </div>

          <div className="qualification__btn btn--flex">
            <RiGraduationCapLine className="qualification__icon" />
            Experiance
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web development</h3>
                <span className="qualification__subtitle">
                  spain - inistitiute
                </span>
                <div className="qualification___calender">
                  <FaRegCalendarAlt />
                  2021 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">sart blah</h3>
                <span className="qualification__subtitle">blah balh</span>
                <div className="qualification___calender">
                  <FaRegCalendarAlt />
                  2021 - present
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">web development</h3>
                <span className="qualification__subtitle">
                  spain - inistitiute
                </span>
                <div className="qualification___calender">
                  <FaRegCalendarAlt />
                  2021 - present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">sart blah</h3>
                <span className="qualification__subtitle">blah balh</span>
                <div className="qualification___calender">
                  <FaRegCalendarAlt />
                  2021 - present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
