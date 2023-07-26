import React from "react";
import profileImage from "../images/photo.jpeg";
import "./about.css";

export default function about() {
  return (
    <div>
      <h2>About Me</h2>
      <img className="profile-image" src={profileImage} alt="My Profile" />
      <p>
        Hello, I'm Steve. I'm a junior software engineer with a background in
        education and linguistics. I have a master's degree in Applied
        Linguistics from{" "}
        <a
          href="https://www.liverpool.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          the University of Liverpool
        </a>{" "}
        and a bachelor's degree in Acting from{" "}
        <a
          href="https://www.leeds.ac.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          the University of Leeds.{" "}
        </a>
      </p>
      <p>
        When I'm not writing code, you will find me hunting antiques, cooking,
        meditating, or exploring new places with my wife, daughters, cats and
        guitar.{" "}
      </p>
    </div>
  );
}

//world map with travel animation?
