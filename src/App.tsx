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
    // console.log(allSections);
    const obsCallback: IntersectionObserverCallback = (entries, observer) => {
      // biome-ignore lint/complexity/noForEach: <explanation>
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

    // biome-ignore lint/complexity/noForEach: <explanation>
    allSections.forEach((section) => {
      if (section) {
        observer.observe(section);
        section.classList.add("section--hidden"); // Initial hidden state
      }
    });

    // Clean-up function
    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
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
        {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
        <PortFolio ref={(el) => (sectionRefs.current[0] = el)} />
        {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
        <Publications ref={(el) => (sectionRefs.current[1] = el)} />
        {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
        <Certifications ref={(el) => (sectionRefs.current[2] = el)} />
        {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
        <CurriculumVitae ref={(el) => (sectionRefs.current[3] = el)} />
        {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
        <Contact ref={(el) => (sectionRefs.current[4] = el)} />
      </main>
      {/* biome-ignore lint/suspicious/noAssignInExpressions: <explanation> */}
      <Footer ref={(el) => (sectionRefs.current[5] = el)} />
    </>
  );
}

export default App;
// https://wildcodeschool.github.io/workshop-react-router/
// https://github.com/Vandanjon/TS_router_props_1
// https://uiverse.io/  for template design in css and html
// https://anthony-gorski.notion.site/Asynchrone-f4570cf7828d4496b175e3a7406d7d8a
// https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6
// https://dailytoast.io/
// https://www.decrochetonalternance.fr  alternance
// https://github.com/ioayoub/WCS0924_Eshop-Project
