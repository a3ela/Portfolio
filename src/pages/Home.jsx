import { About, Contact, Hero, Work } from "../sections/Home/index";
import { Navbar, Footer } from "../components/index";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
