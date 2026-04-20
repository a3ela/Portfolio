import "./Hero.scss";
// eslint-disable-next-line
import { motion } from "framer-motion";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";

const Hero = () => {
  return (
    <div id="home" className="app__header">
      <GridOverlay />

      <div className="top-bar">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="top-text"
        >
          Hey, I'm Abel
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="top-text available-projects"
        >
          <span className="blinking-dot"></span>
          available for new projects
        </motion.div>
      </div>

      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-text"
        >
          <span style={{ color: "var(--bg-surface)" }}>
            a web development <br />
            partner with focus on <br />
          </span>
          interactive experiences
        </motion.h1>
      </div>
    </div>
  );
};

export default Hero;
