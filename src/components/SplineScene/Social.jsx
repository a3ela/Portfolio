import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Social = () => {
  return (
    <div className="hero__social">
      <a href="" className="hero__social-icon" target="_blank">
        <FaGithub />
      </a>
      <a href="" className="hero__social-icon" target="_blank">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Social;
