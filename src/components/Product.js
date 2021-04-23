import React from "react";
import "../css/Product.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { details } = props;
  return (
    <>
      <div className="product-grid">
        <Link to={`/products/${details.id}`}>
          <img src={details.image} alt="fruits"></img>
        </Link>
        <div className="product-info">
          <p>{details.name}</p>
          <p>{details.description}</p>
        </div>
        <div className="product-checkout">
          <i className="fas fa-times"></i>
          <Button outline> {details.price} €</Button>
        </div>
      </div>
    </>
  );
}
