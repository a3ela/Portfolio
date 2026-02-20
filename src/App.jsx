import { About, Footer, Contact, Header, Work } from "./comtainer/index";
import { Navbar } from "./components/index";

// style
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
