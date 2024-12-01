import React from "react";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";
import { DownloadIcon } from "../../icons";

import "./about.css";
const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Something About Me</span>
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
          <a download="" href={CV} className="btn btn--flex">
            Download CV
            <DownloadIcon />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
