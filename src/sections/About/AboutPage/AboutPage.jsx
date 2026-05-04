import React from "react";
import "./AboutPage.scss";
import { image } from "../../../constants";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";

const AboutPage = () => {
  return (
    <section className="about-page" id="about">
      <GridOverlay />

      <div className="about-page__container">
        {/* Left Column: Image */}
        <div className="about-page__image-col">
          <div className="about-page__image-wrapper">
            <img
              src={image.profile}
              alt="Profile"
              className="about-page__img"
            />
          </div>
        </div>

        {/* Right Column: Text */}
        <div className="about-page__text-col">
          <div className="about-page__header">
            <span className="about-page__label">.hello</span>
            <div className="about-page__header-line" />
          </div>

          <div className="about-page__content">
            <p className="about-page__desc">
              I’m a full-stack software engineer based in Addis Ababa,
              specializing in building scalable web applications with React,
              Node.js, and Python. I focus on creating reliable APIs, clean user
              interfaces, and systems that perform well in real-world
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
