import { useEffect, useRef } from "react";
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
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const allSections = sectionRefs.current;

    const obsCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("section--hidden");
        observer.unobserve(entry.target);
      });
    };

    const observer = new IntersectionObserver(obsCallback, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach((section) => {
      if (section) {
        observer.observe(section);
        section.classList.add("section--hidden"); // Initial hidden state
      }
    });

    // Clean-up function
    return () => {
      allSections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <Home />
        <PortFolio ref={(el) => (sectionRefs.current[0] = el)} />
        <Publications ref={(el) => (sectionRefs.current[1] = el)} />
        <Certifications ref={(el) => (sectionRefs.current[2] = el)} />
        <CurriculumVitae ref={(el) => (sectionRefs.current[3] = el)} />
        <Contact ref={(el) => (sectionRefs.current[4] = el)} />
      </main>
      <Footer ref={(el) => (sectionRefs.current[5] = el)} />
    </>
  );
}

export default App;
// https://wildcodeschool.github.io/workshop-react-router/
// https://github.com/Vandanjon/TS_router_props_1
// https://uiverse.io/  for template design in css and html
