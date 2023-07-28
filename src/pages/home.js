import React from "react";
import coder from "../assets/images/coder.gif";

export default function home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to my homepage!</p>
      <img src={coder} alt="coder" />
    </div>
  );
}
