import "./About.scss";
import { image } from "../../../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import { FiArrowUpRight } from "react-icons/fi";

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
            my craft is building experiences that bring value to people and
            celebrate function over form. let's hide the ego and give some
            freedom to creativity and make the first small step changing the
            world to a better place
          </p>

          <motion.div
            className="about__cta-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <a className="about__cta" href="#about" aria-label="About me">
              <span>About me</span>
              <span className="about__cta-arrow">
                <FiArrowUpRight />
              </span>
            </a>
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
