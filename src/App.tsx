import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PortFolio from "./components/PortFolio";
import Publications from "./components/Publications";
import CurriculumVitae from "./components/CurriculumVitae";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <PortFolio />
        <Publications />
        <CurriculumVitae />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
