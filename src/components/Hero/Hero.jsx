import React from "react";
import Data from "./Data";
import "./hero.css";
import SplineScene from "../SplineScene/SplineScene";

import "../../index.css";

const Hero = () => {
  return (
    <section className="hero section " id="home">
      <div className="hero__container ">
        <SplineScene />
      </div>
      <div className="hero__content container">
        <Data />
      </div>
    </section>
  );
};

export default Hero;
