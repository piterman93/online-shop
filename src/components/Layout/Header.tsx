import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { NavLink } from "react-router-dom";

import "../../styles/App.scss";

import { productsActions } from "../../store/products-slice";
import HeaderButton from "../cart/HeaderButton";

interface HeaderProps {
  showCartHandler: () => void;
}

const Header: React.FC<HeaderProps> = ({ showCartHandler }) => {
  const products = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();

  const productsList = products.categories.map((item: any) => (
    <li
      key={item}
      onClick={() => {
        localStorage.setItem("activeCategory", item);
        dispatch(productsActions.setActiveCategory(item));
      }}
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
            Products
            <ul className="productsList">{productsList}</ul>
          </li>
          <li>
            <NavLink to="/home">Contact</NavLink>
          </li>
          <li onClick={showCartHandler}>
            <HeaderButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
