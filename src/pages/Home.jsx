import { About, Contact, Hero, Work } from "../sections/Home/index";
import { Navbar, Footer } from "../components/index";

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
