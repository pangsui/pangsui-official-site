import { useState } from "react";
import React from "react";
import certificationsList from "../data/certifications.json";

const Certifications = React.forwardRef<HTMLElement, object>((_, ref) => {
  const [certificateIndex, setCertificateIndex] = useState(0);

  function handlePdfView() {
    const pdfUrl = certificationsList[certificateIndex].pdfDocument;
    window.open(pdfUrl, "_blank");
  }
  return (
    <section
      ref={ref}
      className="certifications smooth-scrolling "
      id="certifications"
    >
      <h2>Certifications</h2>
      <p className="paragraph">List of Certified Courses</p>
      <div className="buttons-flex">
        <button
          className={`btn js${certificateIndex === 0 ? " animate" : ""}`}
          onClick={() => setCertificateIndex(0)}
        >
          JavaScript
        </button>

        <button
          className={`btn html-css${certificateIndex === 1 ? " animate" : ""}`}
          onClick={() => setCertificateIndex(1)}
        >
          HTML/CSS
        </button>
        <button
          className={`btn java${certificateIndex === 2 ? " animate" : ""}`}
          onClick={() => setCertificateIndex(2)}
        >
          Java
        </button>
      </div>
      <div className="certifications-content">
        <div className="certifications-title">
          {certificationsList[certificateIndex].title}
        </div>
        <p className="course-summary">
          {certificationsList[certificateIndex].summary}
        </p>
        <a
          className="cssbuttons-io-button"
          onClick={handlePdfView}
          // href={pulicationsList[publicationIndex].link}
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
        {/* <a className="download-certification" onClick={handlePdfView}>
          View this certification
        </a> */}
      </div>
    </section>
  );
});

export default Certifications;
