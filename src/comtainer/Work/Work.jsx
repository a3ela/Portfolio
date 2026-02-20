import { useEffect, useRef } from "react";
import { ScrollObserver, valueAtPercentage } from "aatjs";
import "./Work.scss";

const works = [
  {
    title: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque.",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Project Two",
    description:
      "Eum fuga laborum quos expedita iste saepe similique, unde possimus.",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Project Three",
    description: "Reprehenderit, harum! Cupiditate sed magnam.",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?auto=format&fit=crop&w=1200&q=100",
  },
];

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
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        });

        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`;
      });
    });
  }, []);

  return (
    <section className="work" id="work">
      <div className="work__space work__space--small" />

      <div className="work__cards" ref={cardsRef}>
        {works.map((work, index) => (
          <div className="work-card" key={index} id={`work-card-${index}`}>
            <div className="work-card__inner">
              <div className="work-card__image-container">
                <img
                  className="work-card__image"
                  src={work.image}
                  alt={work.title}
                />
              </div>

              <div className="work-card__content">
                <h2 className="work-card__title">{work.title}</h2>
                <p className="work-card__description">{work.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="work__space" />
    </section>
  );
};

export default Work;
