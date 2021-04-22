import "./css/App.css";
import Button from "./components/Button";
import Input from "./components/Input.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Products from "./components/Products.js";
import Navbar from "./components/Navbar.js";
import NotFound from "./components/NotFound.js";
import Cart from "./components/Cart.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}
