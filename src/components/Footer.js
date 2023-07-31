import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Steven Bryant. All rights reserved
      </p>
      <p>
        Illustrations courtesy of{" "}
        <a href="https://icons8.com/illustrations">Ouch!</a> <br></br>
        GIF by{" "}
        <a href="https://pixabay.com/users/prawny-162579/?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=6132">
          Prawny
        </a>{" "}
        from{" "}
        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=animation&utm_content=6132">
          Pixabay
        </a>
      </p>
    </footer>
  );
}
