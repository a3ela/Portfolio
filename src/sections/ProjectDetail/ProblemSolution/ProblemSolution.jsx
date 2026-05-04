import { useParams } from "react-router-dom";
import { projects } from "../../../constants/data";
import GridOverlay from "../../../components/GridOverlay/GridOverlay";
import "./ProblemSolution.scss";

const ProblemSolution = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <section className="problem-solution">
      {/* GridOverlay scoped to this section only */}
      <div className="problem-solution__overlay">
        <GridOverlay />
      </div>

      <div className="problem-solution__container">
        <div className="problem-solution__grid">
          <div className="problem-solution__block">
            <h3
              className="problem-solution__label"
              style={{ color: project.bgColor }}
            >
              Problem
            </h3>
            <p className="problem-solution__text">{project.problem}</p>
          </div>

          <div className="problem-solution__block">
            <h3
              className="problem-solution__label"
              style={{ color: project.bgColor }}
            >
              Solution
            </h3>
            <p className="problem-solution__text">{project.solution}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
