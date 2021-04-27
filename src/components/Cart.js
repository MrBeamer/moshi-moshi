import React, { useState } from "react";
import "../css/Cart.css";
import Input from "./Input";
import Button from "./Button";
import { loadStripe } from "@stripe/stripe-js";

const stripeLoadedPromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

export default function Cart(props) {
  const [email, setEmail] = useState("");
  console.log(email);

  const totalPrice = props.cart
    .reduce((total, product) => total + product.quantity * product.price, 0)
    .toFixed(2);

  const lineItems = props.cart.map((product) => {
    return { price: product.price_id, quantity: product.quantity };
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    const stripe = await stripeLoadedPromise;
    try {
      const result = await stripe.redirectToCheckout({
        lineItems: lineItems,
        mode: "payment",
        successUrl: "https://fruitpanda.netlify.app/orderComplete",
        cancelUrl: "https://fruitpanda.netlify.app/products",
        customerEmail: email,
      });
      console.log(result.error);
    } catch (error) {
      console.log(error);
    }
  }

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
                    <td className="cart-img">
                      <img
                        src={product.image}
                        width="30"
                        height="30"
                        alt={product.name}
                      />
                      <p>{product.name}</p>
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
                <td className="cart-highlight">Total</td>
                <td className="cart-highlight">{totalPrice}€</td>
              </tr>
            </tfoot>
          </table>
          <div className="cart-checkout"></div>
          <form className="payForm" onSubmit={handleFormSubmit}>
            <p>
              Enter your email & then click on pay and your products will be
              delivered to you in 2 days.
            </p>
            <Input
              autoComplete="email"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="cart-input"
            ></Input>
            <Button type="submit">Pay</Button>
          </form>
        </>
      )}
    </div>
  );
}
