import React, { useEffect, useState } from "react";
import "../css/Products.css";
import { products } from "./seed.js";

export default function Products() {
  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/supermarket.json")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  // const [products, setProducts] = useState([]);

  console.log(products);

  // console.log(banana);
  // console.log(banana.price);

  return (
    <div className="products-layout">
      <h1>Products</h1>
      <p>Take a look at our products</p>
      <div className="products-grid"></div>
    </div>
  );
}
