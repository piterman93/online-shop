import React from "react";

import "../../styles/Modal.scss";

interface CartItemProps {
  title: string;
  price: number;
  amount: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  amount,
  onRemove,
  onAdd,
  price,
  title,
}) => {
  const itemPrice = `$${price}`;

  return (
    <li className="cart__item">
      <div>
        <h2>{title}</h2>
        <div className="summary">
          <span className="price">{itemPrice}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
