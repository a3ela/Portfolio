import { Navbar, Footer } from "../components";
import { Hero, Stats, Experience, AboutPage, Skills } from "../sections/About";
import { Contact } from "../sections/Home";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <AboutPage />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
