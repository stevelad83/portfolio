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
        <a href="https://icons8.com/illustrations">Ouch!</a>
      </p>
    </footer>
  );
}
