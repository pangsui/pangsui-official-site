import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    // Convert FormData to an array of key-value pairs
    const formEntries = Array.from(formData.entries());

    // Trigger form submission with Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formEntries as [string, string][]).toString(),
    })
      .then(() => alert("Form submitted successfully!"))
      .catch((error) => alert(error));
  };
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
        onSubmit={handleSubmit}
      >
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
    </div>
  );
};

export default Contact;
