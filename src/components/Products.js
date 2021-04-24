import React, { useEffect, useState } from "react";
import "../css/Products.css";
import { seed } from "./seed.js";
import Product from "../components/Product";

export default function Products(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(seed);
  }, []);

  return (
    <>
      <div className="products-layout">
        <div>
          <h1>Products</h1>
          <p>Take a look at our fruits</p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              details={product}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
              cart={props.cart}
            ></Product>
          ))}
        </div>
      </div>
    </>
  );
}
