import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductItemPage from "../pages/ProductItemPage";
import Cart from "../cart/Cart";

const Layout: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  return (
    <React.Fragment>
      {showCart && <Cart onClose={closeCartHandler} />}
      <div className="App">
        <header>
          <Header showCartHandler={showCartHandler} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route
              path="products/:category/:productId"
              element={<ProductItemPage />}
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
