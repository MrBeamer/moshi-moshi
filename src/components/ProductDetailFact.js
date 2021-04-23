import React from "react";
import "../css/ProductDetailFact.css";

export default function ProductDetailFact(props) {
  const { productDetails } = props;
  return <div className="detail-fact">{productDetails?.fact}</div>;
}
