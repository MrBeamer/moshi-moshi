import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          Order your fruits from <em>Fruit Panda</em> with our easy to use app,
          and get your fresh fruits delivered straight to your doorstep.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2734&q=80"
        alt="woman with oranges"
      />
    </div>
  );
}
