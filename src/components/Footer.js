import React from "react";
import "../css/Footer.css";
import "../css/mediaQueries.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li>
          <i className="fab fa-facebook-square"></i>
        </li>
        <li>
          <i className="fab fa-instagram-square"></i>
        </li>
        <li>
          <i className="fab fa-twitter-square"></i>
        </li>
      </ul>
      <p>© 2021 Michael Beamer. All rights reserved.</p>
    </footer>
  );
}
