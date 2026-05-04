import "./About.scss";
import { image } from "../../../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <GridOverlay />

      <div className="about__container" id="about">
        <motion.div
          className="about__text-col"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about__top-label">
            <span>. about</span>
            <div className="about__line" />
          </div>

          <p className="about__desc">
            I’m a full-stack software engineer based in Addis Ababa,
            specializing in building scalable web applications with React,
            Node.js, and Python. I focus on creating reliable APIs, clean user
            interfaces, and systems that perform well in real-world
            environments.
          </p>

          <motion.div
            className="about__cta-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <Link to="/about" className="about__cta" aria-label="About me">
              <span>About me</span>
              <span className="about__cta-arrow">
                <FiArrowUpRight />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="about__image-col"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="about__image-reveal">
            <img src={image.profile} alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
