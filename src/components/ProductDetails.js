import React, { useEffect, useState } from "react";
import "../css/ProductDetails.css";
import { seed } from "./seed.js";
import {
  useParams,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailNutrition from "./ProductDetailNutrition.js";
import ProductDetailFact from "./ProductDetailFact.js";

export default function ProductDetails(props) {
  const params = useParams();
  const match = useRouteMatch();
  const [detail, setDetail] = useState([]);
  const id = Number(params.id);
  const productDetails = detail[0];

  useEffect(() => {
    const detail = seed.filter((detail) => detail.id === id);
    setDetail(detail);
  }, [params.id, id]);

  return (
    <>
      <div className="details-layout">
        <div>
          <h1>{productDetails?.name}</h1>
          <img src={productDetails?.image} alt="fruit"></img>
        </div>
        <div>
          <div className="tabs">
            <ul>
              <li>
                <NavLink exact activeClassName="active-tab" to={match.url}>
                  Details
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active-tab"
                  to={`${match.url}/nutrition`}
                >
                  Nutrition
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active-tab"
                  to={`${match.url}/fact`}
                >
                  Fun Fact
                </NavLink>
              </li>
            </ul>
          </div>

          <Switch>
            <Route exact path={match.path}>
              <ProductDetailInfo
                productDetails={productDetails}
                onProductAdd={props.onProductAdd}
              />
            </Route>
            <Route exact path={`${match.path}/nutrition`}>
              <ProductDetailNutrition productDetails={productDetails} />
            </Route>
            <Route exact path={`${match.path}/fact`}>
              <ProductDetailFact productDetails={productDetails} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}
