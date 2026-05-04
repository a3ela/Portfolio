import { useParams, Link } from "react-router-dom";
import { projects } from "../../../constants/data";
import "./RelatedProjects.scss";

const RelatedProjects = () => {
  const { id } = useParams();
  const currentProject = projects.find((p) => p.id === id);

  if (!currentProject || !currentProject.seeAlso) return null;

  const related = projects.filter((p) => currentProject.seeAlso.includes(p.id));

  return (
    <section className="related-projects">
      <div className="related-projects__container">
        <div className="related-projects__header">
          <h2 className="related-projects__title">see also</h2>
          <div className="related-projects__line"></div>
        </div>

        <div className="related-projects__list">
          {related.map((project) => (
            <Link
              to={`/project/${project.id}`}
              key={project.id}
              className="related-project-item"
              style={{ backgroundColor: project.bgColor }}
            >
              <div className="related-project-item__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="related-project-item__image"
                />
              </div>

              <div className="related-project-item__info">
                <span
                  className="related-project-item__category"
                  style={{ color: project.textColor }}
                >
                  {project.category || "Project"}
                </span>
                <span
                  className="related-project-item__name"
                  style={{ color: project.textColor }}
                >
                  {project.title}
                </span>
              </div>

              <span
                className="related-project-item__arrow"
                style={{ color: project.textColor }}
              >
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;
