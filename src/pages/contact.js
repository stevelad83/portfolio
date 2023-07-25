import React from "react";
import "./contact.css";

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);
  window.location.href = `mailto:stevelad_83@yahoo.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
};

export default function contact() {
  return (
    <div className="container">
      <h1 className="contact-h1">Get in touch</h1>
      <p>
        I'm always happy to connect over ☕ (virtual or actual) or 🍺!<br></br>
        Please send your message using the form below.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-div">
          <label htmlFor="name" className="contact-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contact-input"
            required
          />
        </div>
        <div className="contact-div">
          <label htmlFor="email" className="contact-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="contact-input"
            required
          />
        </div>
        <div className="contact-div">
          <label htmlFor="message" className="contact-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="contact-input"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Send
        </button>
      </form>
    </div>
  );
}
