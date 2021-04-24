import React from "react";
import "../css/ProductDetailInfo.css";
import Button from "./Button.js";

export default function ProductDetailInfo(props) {
  const { productDetails, onProductAdd } = props;

  return (
    <>
      <div className="detail-info">
        {productDetails?.description} sold at {productDetails?.price}€ per piece
      </div>
      <Button onClick={() => onProductAdd(productDetails)}>
        {productDetails?.price} €
      </Button>
    </>
  );
}
