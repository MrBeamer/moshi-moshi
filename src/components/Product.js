import React from "react";
import "../css/Product.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Product(props) {
  const { details, cart } = props;

  const productFromCart = cart.find((product) => product.id === details.id);
  const quantity = productFromCart ? productFromCart.quantity : 0;
  return (
    <>
      <div className="product-grid">
        <Link to={`/products/${details.id}`}>
          <img src={details.image} alt="fruits"></img>
        </Link>
        {quantity !== 0 && <div className="product-quantity">{quantity}</div>}
        <div className="product-info">
          <p>{details.name}</p>
          <p>{details.description}</p>
        </div>
        <div className="product-checkout">
          <div>
            {quantity !== 0 && (
              <i
                className="fas fa-times"
                onClick={() => props.onProductDelete(details.id)}
              ></i>
            )}
          </div>
          <Button outline onClick={() => props.onProductAdd(details)}>
            {details.price}€
          </Button>
        </div>
      </div>
    </>
  );
}
