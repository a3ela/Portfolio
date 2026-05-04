import { Navbar, Footer } from "../components";
import { Contact } from "../sections/Home";
import {
  Herodetail,
  ProblemSolution,
  ProjectStory,
  ShowcaseImages,
  RelatedProjects,
} from "../sections/ProjectDetail";

const ProjectDetail = () => {
  return (
    <div>
      <Navbar />
      <Herodetail />
      <ProblemSolution />
      <ProjectStory />
      <ShowcaseImages />
      <RelatedProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
