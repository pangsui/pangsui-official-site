import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = React.forwardRef<HTMLElement, object>((_, ref) => {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xyzgwvoe", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again later.");
    }
  };
  {
    // Set the timeout to clear the status after 5 seconds
    setTimeout(() => {
      setStatus("");
    }, 5000);
  }
  return (
    <section ref={ref} className="contact smooth-scrolling" id="contact">
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
      {status && <p className="form-status">{status}</p>}

      <form name="contact" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="name">
            Company Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="email address"
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            placeholder="enter message"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
});

export default Contact;
