import React from "react";
import "../css/OrderComplete.css";
import Button from "../components/Button.js";
import { Link } from "react-router-dom";

export default function OrderComplete() {
  return (
    <div className="order-complete-layout">
      <img
        src="https://res.cloudinary.com/dxdboxbyb/image/upload/v1619512342/fruit%20panda/fphooijf2ne8vpt3kskw.jpg"
        alt="melon"
      ></img>
      <div className="order-complete-btn">
        <Link to="/products">
          <Button className="cta-big">Back to Products</Button>
        </Link>
      </div>
    </div>
  );
}
