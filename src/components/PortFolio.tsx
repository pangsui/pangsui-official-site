import { useState } from "react";

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
    <section className="portfolio" id="portfolio">
      <h2>Portfolio</h2>
      <p className="paragraph">List of Completed Projects</p>
      <PortFolioItem data={portfolioList} />
    </section>
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

const portfolioList = [
  {
    title: "Fictional Banking System",
    description:
      "An application that allows users to log in to their accounts, perform basic banking transactions. Use these accounts for testing: user: pul, PIN: 3333, and user: mfm, PIN: 4444.",
    gitHubLink: "https://github.com/pangsui/pangkist",
    url: "https://pangskist.netlify.app",
  },
  {
    title: "Workout Running/Cycling",
    description:
      "Use this application to track your workouts by clicking on the map and selecting either a running or cycling workout.",
    gitHubLink: "https://github.com/pangsui/workouts-pangsui",
    url: "https://pangsui-workouts-mapty.netlify.app/",
  },
  {
    title: "Billshare App",
    description:
      "This app helps two people split their bills whenever they go shopping.",
    gitHubLink: "https://github.com/pangsui/outing-app",
    url: "https://pangsui-billing-app.netlify.app",
  },
  {
    title: "Items Packed Travel App",
    description:
      "This app ensures you pack all the necessary items for each journey",
    gitHubLink: "https://github.com/pangsui/pangsui-travel-list",
    url: "https://pangsui-travel-item.netlify.app/",
  },
  {
    title: "Pangsui Leno App",
    description:
      "An application that demonstrates the perfect application of CSS grids and flexbox",
    gitHubLink: "https://github.com/pangsui/linge-leno-website",
    url: "https://leno-pangsui.netlify.app",
  },
  {
    title: "Pangsui Turtor App",
    description:
      "An application that demonstrates the perfect application of CSS grids and flexbox",
    gitHubLink: "https://github.com/pangsui/Tutor-website",
    url: "https://pangsui-tutor.netlify.app",
  },
  {
    title: "Bankist App",
    description:
      "An application that demonstrates advanced DOM manipulation techniques in action",
    gitHubLink: "",
    url: "https://pangsuibankist2.netlify.app",
  },
  {
    title: "A Simple Pig Game",
    description:
      "An application where two players roll a dice, and the first to reach a 100 wins. Roll dice and hold your score",
    gitHubLink: "https://github.com/pangsui/pig-game-version-2",
    url: "https://pangsui-pig-game.netlify.app",
  },
  {
    title: "Lumina Creative App",
    description:
      "An application that demonstrates advanced DOM manipulation techniques in action",
    gitHubLink: "https://github.com/pangsui/pangsui-luminity",
    url: "https://pangsuiluminal.netlify.app",
  },
];

export default PortFolio;
