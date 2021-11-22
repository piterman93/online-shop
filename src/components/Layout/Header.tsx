import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { NavLink } from "react-router-dom";

import "../../styles/App.scss";

import { productsActions } from "../../store/products-slice";
import HeaderButton from "../cart/HeaderButton";

const Header: React.FC = () => {
  const products = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();

  const productsList = products.categories.map((item: any) => (
    <li
      key={item}
      onClick={() => dispatch(productsActions.setActiveCategory(item))}
    >
      <Link to="/products"> {item}</Link>
    </li>
  ));
  return (
    <header className="header">
      <h1>Shop App</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">About us</NavLink>
          </li>
          <li>
            <NavLink to="#">Products</NavLink>
            <ul className="productsList">{productsList}</ul>
          </li>
          <li>
            <NavLink to="/home">Contact</NavLink>
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
