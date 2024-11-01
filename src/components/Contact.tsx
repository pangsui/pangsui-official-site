import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <h2 className="contact-heading">Let's Work Together</h2>
        <p>
          <span className="phone">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span>+33 758 45 34 54</span>
          <br />
          <span className="email">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>upangsui@yahoo.com</span>
        </p>
        <p>Or leave me a message</p>
      </div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={() => ""}
        netlify-honeypot="bot-field"
      >
        <div className="form-group">
          <label className="visually-hidden">Company Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="name"
            required
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email address"
            required
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="enter message"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
