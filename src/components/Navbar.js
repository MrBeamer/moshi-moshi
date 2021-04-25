import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function Navbar(props) {
  const quantity = props.cart
    .map((product) => product.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          className="nav-logo"
          src="https://res.cloudinary.com/dxdboxbyb/image/upload/v1619104895/fruit%20panda/bwj0jjolii6eisciw9m9.svg"
          alt="logo"
        ></img>
      </NavLink>
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
            <Button className="cta">{`Cart (${quantity})`}</Button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
