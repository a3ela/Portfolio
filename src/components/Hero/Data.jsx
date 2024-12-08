import React from "react";
import { SendIcon } from "../../icons";
const Data = () => {
  return (
    <div className="hero__data">
      <div>
        <h1 className="hero__title">Abel.S</h1>
        <h3 className="hero__subtitle">FullStackEngineer</h3>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut
          cupiditate tenetur quas vel fugit consequatur illum obcaecati veniam,
          recusandae, quia magni. Ipsum natus, commodi numquam quae harum
          corporis illum?
        </p>
        <a href="#contact" className="btn btn--flex">
          <span>Say Hello</span>
          <SendIcon />
        </a>
      </div>
    </div>
  );
};

export default Data;
