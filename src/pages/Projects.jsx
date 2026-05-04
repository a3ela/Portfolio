import { Navbar, Footer } from "../components";
import { Hero, Cards } from "../sections/Projects";
import { Contact } from "../sections/Home";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Projects;
