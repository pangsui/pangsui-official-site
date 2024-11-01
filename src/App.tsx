import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PortFolio from "./components/PortFolio";
import Publications from "./components/Publications";
import CurriculumVitae from "./components/CurriculumVitae";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortFolio />} />
            <Route path="/publication" element={<Publications />} />
            <Route path="/certification" element={<Certifications />} />
            <Route path="/resume" element={<CurriculumVitae />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        {/* <PortFolio />
        <Publications />
        <Certifications />
        <CurriculumVitae />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
// https://wildcodeschool.github.io/workshop-react-router/
// https://github.com/Vandanjon/TS_router_props_1
// https://uiverse.io/
