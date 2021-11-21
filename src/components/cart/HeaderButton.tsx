import React, { useState } from "react";

import Icon from "./Icon";

const HeaderButton: React.FC = (props) => {
  const [isBtnBump, setIsBtnBump] = useState(false);
  // const context = useContext(CartContext);

  // const numberOfCartItems = context.items.reduce((currentNumber, item) => {
  //   return currentNumber + item.amount;
  // }, 0);

  // const { items } = context;

  // useEffect(() => {
  //   if (items.length === 0) return;

  //   setIsBtnBump(true);

  //   const timer = setTimeout(() => {
  //     setIsBtnBump(false);
  //   }, 300);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [items]);

  const btnClasses = `cart__button ${isBtnBump ? "bump" : ""}`;

  return (
    <button className={btnClasses}>
      <span className="icon">
        <Icon />
      </span>
      <span>Your cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderButton;
