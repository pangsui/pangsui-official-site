import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PortFolio from "./components/PortFolio";
import Publications from "./components/Publications";
import CurriculumVitae from "./components/CurriculumVitae";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <PortFolio />
        <Publications />
        <Certifications />
        <CurriculumVitae />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
// https://wildcodeschool.github.io/workshop-react-router/
// https://github.com/Vandanjon/TS_router_props_1
// https://uiverse.io/
