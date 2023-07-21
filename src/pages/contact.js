import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);
  // window.location.href = `mailto:stevelad_83@yahoo.com?subject=Contact%20Form&body=Name:%20${name}%0AEmail:%20${email}%0AMessage:%20${message}`;
};

export default function contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact me here...</p>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
