import { useParams } from "react-router-dom";
import { projects } from "../../../constants/data";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import "./ProjectStory.scss";

const ProjectStory = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project || !project.longDesc) return null;

  return (
    <section className="project-story">
      {/* Scoped GridOverlay */}
      <div className="project-story__overlay">
        <GridOverlay />
      </div>

      <div className="project-story__container">
        <div className="project-story__grid">
          <div className="project-story__content">
            <div className="project-story__text-container">
              {project.longDesc.split("\n\n").map((para, i) => (
                <p key={i} className="project-story__text">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <aside className="project-story__stats">
            {[
              { number: "01", label: "Year", value: project.year },
              { number: "02", label: "Timeframe", value: project.timeframe },
              { number: "03", label: "Tools", value: project.tools },
              { number: "04", label: "Category", value: project.category },
            ].map((item, i) => (
              <div className="stats-item" key={i}>
                <span
                  className="stats-item__label"
                  style={{ color: project.bgColor }}
                >
                  <span className="stats-item__number">{item.number}</span>{" "}
                  {item.label}
                </span>
                <span className="stats-item__value">{item.value}</span>
                <div className="stats-item__line"></div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectStory;
