import { useState } from "react";
import pulicationsList from "../data/publications.json";
import Navbar from "./Navbar";

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
    <>
      <Navbar />
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

          {/* <a
          target="_blanc"
          className="download-article"
          href={pulicationsList[publicationIndex].link}
        >
          View this publication
        </a> */}
          <div className="buttons">
            {publicationIndex > 0 && (
              <button style={{ color: "#fff" }} onClick={handlePrevious}>
                Previous
              </button>
            )}
            <a
              className="cssbuttons-io-button"
              href={pulicationsList[publicationIndex].link}
              target="_blanc"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
                ></path>
              </svg>
              <span>Download</span>
            </a>
            {publicationIndex < pulicationsList.length - 1 && (
              <button style={{ color: "#fff" }} onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default Publications;
