import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

import Header from "./Header";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductItemPage from "../pages/ProductItemPage";
import Cart from "../cart/Cart";

const Layout: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector((state: RootStateOrAny) => state.cart.items);
  const cartTotalPrice = useSelector(
    (state: RootStateOrAny) => state.cart.totalPrice
  );

  const closeCartHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("price", JSON.stringify(cartTotalPrice));
  }, [cartItems, cartTotalPrice]);

  return (
    <React.Fragment>
      {showCart && <Cart onClose={closeCartHandler} />}
      <header>
        <Header showCartHandler={showCartHandler} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:category/:productId"
            element={<ProductItemPage />}
          />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default Layout;
