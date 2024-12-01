import React, { useState } from "react";
import "./header.css";
import {
  IoHomeOutline,
  IoChatbubbleEllipsesOutline,
  IoClipboardOutline,
  IoGridOutline,
  IoGitBranch,
} from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Abela
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <IoHomeOutline className="nav__icon" />
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <IoHomeOutline className="nav__icon" />
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <IoClipboardOutline className="nav__icon" />
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <IoGitBranch className="nav__icon" />
                SKills
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <IoChatbubbleEllipsesOutline className="nav__icon" />
                Contact
              </a>
            </li>
          </ul>
          <IoMdClose
            className="nav__close"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <IoGridOutline />
        </div>
      </nav>
    </header>
  );
};

export default Header;