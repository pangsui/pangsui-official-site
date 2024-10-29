import { useState } from "react";
import pulicationsList from "../data/publications.json";

function Publications() {
  const [publicationIndex, setPublicationIndex] = useState(0); //create state and set dafault value
  // const [isOpen, setIsOpen] = useState(true);

  // update state
  function handleNext() {
    setPublicationIndex(() => publicationIndex + 1);
    console.log(publicationIndex);
  }
  function handlePrevious() {
    setPublicationIndex(() => publicationIndex - 1);
    console.log(publicationIndex);
  }

  return (
    <section className="pulications" id="publications">
      <h2 className="publications-paragraph">Publications</h2>
      <p className="publications-heading">List of Scientific Publications</p>
      <div className="numbers">
        <div
          className={`${publicationIndex === 0 ? "active" : ""}`}
          onClick={() => setPublicationIndex(0)}
        >
          1
        </div>
        <div
          className={`${publicationIndex === 1 ? "active" : ""}`}
          onClick={() => setPublicationIndex(1)}
        >
          2
        </div>
        <div
          className={`${publicationIndex === 2 ? "active" : ""}`}
          onClick={() => setPublicationIndex(2)}
        >
          3
        </div>
        <div
          className={`${publicationIndex === 3 ? "active" : ""}`}
          onClick={() => setPublicationIndex(3)}
        >
          4
        </div>
      </div>
      <div className="publications-content">
        <h4 className="title pulications-title">
          {pulicationsList[publicationIndex].title}
        </h4>
        <p className="message">{pulicationsList[publicationIndex].text}</p>
        <a
          target="_blanc"
          className="download-article"
          href={pulicationsList[publicationIndex].link}
        >
          Downlaod article
        </a>
        <div className="buttons">
          {publicationIndex > 0 && (
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {publicationIndex < pulicationsList.length - 1 && (
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
export default Publications;
