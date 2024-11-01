import { useState } from "react";
import portfolioList from "../data/portfolio.json";
import Navbar from "./Navbar";
interface PortFolioProps {
  title: string;
  description: string;
  gitHubLink: string;
  url: string;
  num?: number;
  curOpen?: number;
  setCurOpen?: React.Dispatch<React.SetStateAction<number>>;
}
interface DataProps {
  data: PortFolioProps[];
}
function PortFolio() {
  return (
    <>
      <Navbar />
      <section className="portfolio" id="portfolio">
        <h2>Portfolio</h2>
        <p className="paragraph">List of Completed Projects</p>
        <PortFolioItem data={portfolioList} />
      </section>
    </>
  );
}
function PortFolioItem({ data }: DataProps) {
  const [curOpen, setCurOpen] = useState(-1); //initially none is open
  return (
    <div className="portfolio-grid">
      {data.map((portfolio, index) => (
        <Item
          title={portfolio.title}
          description={portfolio.description}
          gitHubLink={portfolio.gitHubLink}
          url={portfolio.url}
          key={index}
          num={index}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
}
function Item({
  title,
  description,
  gitHubLink,
  url,
  num,
  curOpen,
  setCurOpen,
}: PortFolioProps) {
  // const [isOpen, setIsOpen] = useState(false);
  const isOpen = num === curOpen;
  function handlePortfolio() {
    // setIsOpen((isOpen) => !isOpen);
    if (setCurOpen) {
      setCurOpen(isOpen ? -1 : num ?? 0);
    }
  }
  return (
    <div
      className={`portfolio-item ${isOpen ? " open" : ""}`}
      onClick={handlePortfolio}
    >
      <div className="title-sign">
        <span className="title">{title}</span>
        <span className="plus-minus">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && (
        <div className={`item-content ${isOpen ? "" : "hidden"}`}>
          <p>{description}</p>
          <a className="git" href={gitHubLink} target="_blank">
            Source Code
          </a>
          <a className="url" href={url} target="_blank">
            Website
          </a>
        </div>
      )}
    </div>
  );
}

export default PortFolio;
