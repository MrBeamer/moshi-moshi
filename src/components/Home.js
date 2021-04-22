import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Fruits delivered in 15 minutes</h1>
        <p>
          Order your fruits from <em>Fruit Panda</em> with our easy to use app,
          and get your fresh fruits delivered straight to your doorstep.
        </p>
        <Link to="/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=722&q=80"
        alt="woman with oranges"
      />
    </div>
  );
}