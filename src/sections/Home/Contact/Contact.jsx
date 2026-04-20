import "./Contact.scss";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GridOverlay from "../../../components/GridOverlay/GridOverlay"; // adjust path as needed
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="contact">
      <GridOverlay />

      <div className="contact__container">
        <motion.div
          className="contact__content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="contact__top-label">
            <span>.say hello</span>
            <div className="contact__line" />
          </div>

          <h2 className="contact__title">
            I&apos;m open for freelance projects, feel free to email me to see
            how we can collaborate
          </h2>
        </motion.div>

        <motion.div
          className="contact__cta-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <Link
            to="/contact"
            className="contact__cta"
            aria-label="Go to contact page"
          >
            <span>contact me</span>
            <span className="contact__cta-arrow">
              <FiArrowUpRight />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
