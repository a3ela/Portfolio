import { useParams } from "react-router-dom";
import { projects } from "../../../constants/data";
import { SectionHero } from "../../../components";
import "./HeroDetail.scss";

const HeroDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <section className="project-hero">
      <SectionHero title={project.title} description={project.heroDesc} />

      <div className="project-hero__image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-hero__image"
        />
      </div>
    </section>
  );
};

export default HeroDetail;
