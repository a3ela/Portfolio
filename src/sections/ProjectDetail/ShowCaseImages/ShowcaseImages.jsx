import { useParams } from "react-router-dom";
import { projects } from "../../../constants/data";
import "./ShowcaseImages.scss";

const ShowcaseImages = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return null;

  const gallery = [project.image, project.image];

  return (
    <section className="showcase-images">
      <div className="container">
        <div className="showcase-images__list">
          {gallery.map((img, index) => (
            <div key={index} className="showcase-images__item">
              <img src={img} alt={`${project.title} showcase ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseImages;
