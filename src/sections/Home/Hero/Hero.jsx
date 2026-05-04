import "./Hero.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";

// Reusable animation config (no visual change)
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
});

const Hero = () => {
  return (
    <section id="home" className="app__header">
      <GridOverlay />

      <div className="top-bar">
        <motion.span {...fadeUp(0.2)} className="top-text">
          Hey, I'm Abel
        </motion.span>

        <motion.div {...fadeUp(0.2)} className="top-text available-projects">
          <span className="blinking-dot" aria-hidden="true" />
          <span className="availability-text">available for new projects</span>
        </motion.div>
      </div>

      <div className="header-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="hero-text"
        >
          <span style={{ color: "var(--bg-surface)" }}>
            Full‑Stack Engineer
            <br />
            building scalable <br />
          </span>
          APIs & interactive UIs
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
