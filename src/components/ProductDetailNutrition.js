import React from "react";
import "../css/ProductDetailNutrition.css";

export default function ProductDetailNutrition(props) {
  const { productDetails } = props;
  return (
    <table className="table table-nutrition">
      <thead>
        <tr>
          <th>Nutrient</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Protein</td>
          <td>{productDetails?.nutrition.protein}g</td>
        </tr>
        <tr>
          <td>Carbohydrates</td>
          <td>{productDetails?.nutrition.carbs}g</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>{productDetails?.nutrition.fat}g</td>
        </tr>
        <tr>
          <td>Sugar</td>
          <td>{productDetails?.nutrition.sugar}g</td>
        </tr>
      </tbody>
    </table>
  );
}
