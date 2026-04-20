import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-inner">
        <div className="app__navbar-logo">
          <Link to="/">.abel</Link>
        </div>

        <ul className="app__navbar-links">
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li className="cta-link">
            <a href="/resume.pdf" download>
              get resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />
          {toggle && (
            <motion.div
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <li>
                  <Link to="/projects" onClick={() => setToggle(false)}>
                    projects
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setToggle(false)}>
                    about
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setToggle(false)}>
                    contact
                  </Link>
                </li>
                <li className="cta-link">
                  <a
                    href="/resume.pdf"
                    download
                    onClick={() => setToggle(false)}
                  >
                    Get Resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
