import { projects } from "../../../constants/data";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import "./Cards.scss";

const Cards = () => {
  return (
    <section className="project-cards">
      <GridOverlay />
      <div className="project-cards__container">
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <div className="project-item__card-wrapper">
              <Link 
                to={`/project/${project.id}`}
                className="project-card" 
                style={{ backgroundColor: project.bgColor, color: project.textColor }}
              >
                <div className="project-card__header">
                  <span className="project-card__year">{project.year}</span>
                  <span className="project-card__category">{project.category}</span>
                </div>
                
                <div className="project-card__body">
                  <h2 className="project-card__title">{project.title}</h2>
                 <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="project-card__arrow"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>

                <div className="project-card__image-container">
                  <img src={project.image} alt={project.title} className="project-card__image" />
                </div>
              </Link>
            </div>

            <div className="project-item__desc-wrapper">
              <div className="project-item__desc-sticky">
                <p 
                  className="project-item__description"
                  style={{ color: project.bgColor }}
                >
                  {project.heroDesc}
                </p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
