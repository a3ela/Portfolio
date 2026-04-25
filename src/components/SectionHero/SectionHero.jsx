import "./SectionHero.scss";
import GridOverlay from "../GridOverlay/GridOverlay";
// eslint-disable-next-line
import { motion } from "framer-motion";

const SectionHero = ({ title, description }) => {
  return (
    <div className="section-hero">
      <GridOverlay />

      <div className="section-hero__content">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="section-hero__title">{title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="section-hero__description-wrapper"
        >
          <p className="section-hero__description">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionHero;
