import "./AboutPage.scss";
import { image } from "../../../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";

const AboutPage = () => {
  return (
    <section className="about" id="about">
      <GridOverlay />

      <div className="about__container">
        <div className="about__image-col">
          <div className="about__image-wrapper">
            <img src={image.profile} alt="Profile" />
          </div>
        </div>

        <div className="about__text-col">
          <div className="about__header">
            <div className="about__label">
              <span>.hello</span>
              <div className="about__line" />
            </div>
          </div>

          <div className="about__content">
            <p className="about__desc">
              my craft is building experiences that bring value to people and
              celebrate function over form. let's hide the ego and give some
              freedom to creativity and make the first small step changing the
              world to a better place
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
