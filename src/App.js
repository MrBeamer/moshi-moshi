import "./css/App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Products from "./components/Products.js";
import Navbar from "./components/Navbar.js";
import NotFound from "./components/NotFound.js";
import Cart from "./components/Cart.js";
import Footer from "./components/Footer.js";
import ProductDetails from "./components/ProductDetails.js";
import OrderComplete from "./components/OrderComplete.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }]);
    }
  }

  return (
    <>
      <BrowserRouter>
        {window.location.pathname !== "/orderComplete" && (
          <Navbar cart={cart} />
        )}
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/products">
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            </Route>
            <Route path="/products/:id">
              <ProductDetails onProductAdd={handleProductAdd} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
            <Route exact path="/orderComplete">
              <OrderComplete />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
        {window.location.pathname !== "/orderComplete" && <Footer />}
      </BrowserRouter>
    </>
  );
}
