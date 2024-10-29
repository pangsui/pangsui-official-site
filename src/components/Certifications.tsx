import { useState } from "react";
import certificationsList from "../data/certifications.json";

function Certifications() {
  const [certificateIndex, setCertificateIndex] = useState(0);
  function handlePdfView() {
    const pdfUrl = certificationsList[certificateIndex].pdfDocument;
    window.open(pdfUrl, "_blank");
  }
  return (
    <section className="certifications" id="certifications">
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
        <a className="download-certification" onClick={handlePdfView}>
          View this certification
        </a>
      </div>
    </section>
  );
}

export default Certifications;
