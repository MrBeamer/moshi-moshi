import React, { useState } from "react";
import "../css/Cart.css";
import Input from "./Input";
import Button from "./Button";
import { loadStripe } from "@stripe/stripe-js";

export default function Cart(props) {
  const api = {
    key: process.env.REACT_APP_STRIPE_KEY,
  };
  const [email, setEmail] = useState("");
  console.log(email);

  const totalPrice = props.cart
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);

  return (
    <div className="cart-layout">
      <h1>Your Cart</h1>
      {props.cart.length === 0 && (
        <p>You have not added any product to your cart yet.</p>
      )}
      {props.cart.length > 0 && (
        <>
          {" "}
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Unit price </th>
                <th>Quanity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props.cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <img
                        src={product.image}
                        width="30"
                        height="30"
                        alt={product.name}
                      />
                      {product.name}
                    </td>
                    <td> {product.price}€</td>
                    <td> {product.quantity}</td>
                    <td>{(product.quantity * product.price).toFixed(2)}€</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>{totalPrice}€</td>
              </tr>
            </tfoot>
          </table>
          <div className="cart-checkout"></div>
          <form className="payForm">
            <p>
              Enter your email and then click on pay and your products will be
              delivered to you in 2 days.
            </p>
            <Input
              autocomplete="email"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            ></Input>
            <Button type="submit">Pay</Button>
          </form>
        </>
      )}
    </div>
  );
}
