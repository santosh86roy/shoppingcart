import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsDetails from "./components/ProductsDetails";
import SearchItems from "./components/SearchItems";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import Checkout from "./components/CheckOut";
import Buy from "./components/Buy.jsx";

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route
            path="/"
            element={<Products cart={cart} setCart={setCart} items={data} />}
          />
          <Route
            path="/product/:id"
            element={<ProductsDetails cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItems cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/buy" element={<Buy />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />{" "}
          {/* Pass cart prop to Checkout */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
