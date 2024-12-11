import React from "react";
import { FiSend } from "react-icons/fi";
import "./hero.css";
const Data = () => {
  return (
    <div className="hero__data">
      <div>
        <h1 className="hero__title">Hi, I'm Abel</h1>
        <h3 className="hero__subtitle">Software Engineer</h3>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta aut
          cupiditate tenetur quas vel fugit consequatur illum obcaecati veniam,
          recusandae, quia magni. Ipsum natus, commodi numquam quae harum
          corporis illum?
        </p>
        <a href="#" className="button button--flex">
          <span>Say Hello</span>
          <FiSend />
        </a>
      </div>
    </div>
  );
};

export default Data;
