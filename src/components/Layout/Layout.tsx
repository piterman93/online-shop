import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/Home";
import Products from "../pages/Products";

const Layout: React.FC = () => {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;
