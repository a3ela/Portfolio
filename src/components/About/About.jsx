import React from "react";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";
import { FaDownload } from "react-icons/fa6";

import "./about.css";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="section__header container">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">Something About Me</span>
        <hr className="section__line" />
      </div>

      <div className="about__container container grid">
        <img src={AboutImg} alt="image" className="about__img" />
        <div className="about__data">
          <Info />

          <p className="about__description">
            Full Stack Developer Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Laudantium labore temporibus, quis sapiente, nisi
            officia minima soluta nulla quos tempore non ratione! Tempore,
            mollitia ratione. Animi, aliquam? Ipsum, modi minima.
          </p>
          <a download="" href={CV} className="button button--flex">
            <span>Download CV</span>
            <FaDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
