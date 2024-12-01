import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="hero__container container grid">
        <div className="hero__content grid">
          <Social />
          <div className="hero__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
