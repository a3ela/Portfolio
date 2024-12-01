import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skill />
      </main>
    </div>
  );
}

export default App;
