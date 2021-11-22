import React, { useState, useEffect } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import Icon from "./Icon";

const HeaderButton: React.FC = () => {
  const [isBtnBump, setIsBtnBump] = useState(false);

  const cart = useSelector((state: RootStateOrAny) => state.cart);

  const numberOfCartItems = cart.items.reduce(
    (currentNumber: number, item: any) => {
      return currentNumber + item.amount;
    },
    0
  );

  const { items } = cart;

  useEffect(() => {
    if (items.length === 0) return;

    setIsBtnBump(true);

    const timer = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `cart__button ${isBtnBump ? "bump" : ""}`;

  return (
    <button className={btnClasses}>
      <span className="icon">
        <Icon />
      </span>
      <span>Your cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
