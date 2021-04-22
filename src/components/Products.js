import React, { useEffect, useState } from "react";
import "../css/Products.css";
import { seed } from "./seed.js";
import Product from "../components/Product";

export default function Products() {
  // useEffect(() => {
  //   fetch("https://react-tutorial-demo.firebaseio.com/supermarket.json")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(seed);
  }, []);
  console.log(products);

  return (
    <div className="products-layout">
      <div>
        <h1>Products</h1>
        <p>Take a look at our fruits</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <Product key={product.id} details={product}></Product>
        ))}
      </div>
    </div>
  );
}
