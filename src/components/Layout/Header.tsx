import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/App.scss";
import HeaderButton from "../cart/HeaderButton";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Shop App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">About us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="home">Contact</NavLink>
          </li>
          <li>
            <HeaderButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
