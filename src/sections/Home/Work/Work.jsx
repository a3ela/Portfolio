import { useEffect, useRef } from "react";
import { ScrollObserver, valueAtPercentage } from "aatjs";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Work.scss";

import { projects } from "../../../constants/data";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";

const Work = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsRef.current;
    if (!cardsContainer) return;

    const cards = cardsContainer.querySelectorAll(".work-card");
    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`,
    );

    cards.forEach((card, index) => {
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".work-card__inner");

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - 300,
      }).onScroll(({ percentageY }) => {
        cardInner.style.setProperty(
          "--scale",
          valueAtPercentage({ from: 1, to: toScale, percentage: percentageY }),
        );
        cardInner.style.setProperty(
          "--brightness",
          valueAtPercentage({ from: 1, to: 0.6, percentage: percentageY }),
        );
      });
    });
  }, []);

  return (
    <section id="work" className="work">
      <GridOverlay />

      <div className="work__space work__space--small" />

      <div className="work__cards" ref={cardsRef}>
        {projects.map((work, index) => {
          const cardContent = (
            <div
              className="work-card__inner"
              style={{ backgroundColor: work.bgColor, color: work.textColor }}
            >
              <div className="work-card__header">
                <div
                  className="work-card__meta"
                  style={{ borderBottomColor: `${work.textColor}33` }}
                >
                  <span className="year">{work.year}</span>
                  <span className="type">{work.category}</span>
                </div>
                <div className="work-card__title-row">
                  <h2 className="title">{work.title}</h2>
                  <span className="arrow">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="work-card__image-container">
                <img
                  className="work-card__image"
                  src={work.image}
                  alt={work.title}
                />
              </div>
            </div>
          );

          return (
            <Link
              to={`/project/${work.id}`}
              className="work-card"
              key={index}
              id={`work-card-${index}`}
            >
              {index === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {cardContent}
                </motion.div>
              ) : (
                cardContent
              )}
            </Link>
          );
        })}
      </div>

      <div className="work__space" />
    </section>
  );
};

export default Work;
