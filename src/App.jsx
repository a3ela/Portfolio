import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <Work />
        <About />
        <Skills />
      </main>
      <div style={{ color: "white" }}>footer</div>
    </div>
  );
}

export default App;
