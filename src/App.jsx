import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Work from "./components/Work/Work";
import Qualification from "./components/Quallification/Qualification";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <Work />
        <About />
        <Skill />
        <Qualification />
      </main>
      <div style={{ color: "white" }}>footer</div>
    </div>
  );
}

export default App;
