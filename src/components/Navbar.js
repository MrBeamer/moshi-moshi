import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="nav-logo"
        src="https://res.cloudinary.com/dxdboxbyb/image/upload/v1619104895/fruit%20panda/bwj0jjolii6eisciw9m9.svg"
        alt="logo"
      ></img>
      <ul>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/about">
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName="active" to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
