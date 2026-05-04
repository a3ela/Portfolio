import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4, HiX } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "framer-motion";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <nav className="app__navbar">
      <div className="app__navbar-inner">
        <div className="app__navbar-logo">
          <NavLink to="/" end>
            .abel
          </NavLink>
        </div>

        <ul className="app__navbar-links">
          <li>
            <NavLink to="/projects">projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
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
                  <NavLink to="/projects" onClick={() => setToggle(false)}>
                    projects
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" onClick={() => setToggle(false)}>
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" onClick={() => setToggle(false)}>
                    contact
                  </NavLink>
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
      {/* Scroll Progress Bar Background */}
      <div className="app__navbar-progress-bg" />
      {/* Scroll Progress Bar */}
      <motion.div className="app__navbar-progress" style={{ scaleX }} />
    </nav>
  );
};

export default Navbar;
