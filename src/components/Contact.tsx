import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact = React.forwardRef<HTMLElement, object>((props, ref) => {
  const initialFormData: ContactFormData = { name: "", email: "", message: "" };

  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formDataObj = new FormData(form);
    const formEntries = Array.from(formDataObj.entries());

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formEntries as [string, string][]).toString(),
    })
      .then(() => {
        alert("Form submitted successfully!");
        setFormData(initialFormData); // Reset the form fields to initial values
      })
      .catch((error) => alert(error));
  };
  return (
    <section ref={ref} className="contact smooth-scrolling " id="contact">
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
      <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label className="visually-hidden">Company Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="name"
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="email address"
          />
        </div>
        <div className="form-group">
          <label className="visually-hidden">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
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
