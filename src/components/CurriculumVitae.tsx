import React from "react";
import resumeList from "../data/resume.json";
const CurriculumVitae = React.forwardRef<HTMLElement, object>((props, ref) => {
  // const [resumeIndex, setResumeIndex] = useState(0);

  function handleCVEG() {
    const pdfUrl = resumeList[0].pdfDocument;
    window.open(pdfUrl, "_blank");
  }
  function handleCVFR() {
    const pdfUrl = resumeList[1].pdfDocument;
    window.open(pdfUrl, "_blank");
  }

  return (
    <section ref={ref} className="resume smooth-scrolling " id="cv">
      <h2 className="resumer-heading">Resume</h2>
      <p className="paragraph">Download the English or French Version</p>
      <div className="resume-btn-flex">
        <div className="resume-btn" onClick={handleCVEG}>
          <button className="cssbuttons-io-button">
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
            <span>English</span>
          </button>
        </div>
        <div className="resume-btn" onClick={handleCVFR}>
          <button className="cssbuttons-io-button">
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
            <span>French</span>
          </button>
        </div>
      </div>
    </section>
  );
});

export default CurriculumVitae;
