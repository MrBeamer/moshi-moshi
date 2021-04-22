import React from "react";
import "../css/Product.css";
import Button from "../components/Button";

export default function Product(props) {
  const { details } = props;
  console.log(details);
  return (
    <div className="product-grid">
      <img src={details.image} alt="fruits"></img>
      <div className="product-info">
        <p>{details.name}</p>
        <p>{details.description}</p>
      </div>
      <div className="product-checkout">
        <i class="fas fa-times"></i>
        <Button outline> {details.price} €</Button>
      </div>
    </div>
  );
}
