import React from "react";
import { useDispatch } from "react-redux";

import "../../styles/Modal.scss";

import { cartActions } from "../../store/cart-slice";

interface CartItemProps {
  id: number;
  title: string;
  price: number;
  totalPrice: number;
  amount: number;
}

const CartItem: React.FC<CartItemProps> = ({
  amount,
  id,
  price,
  title,
  totalPrice,
}) => {
  const dispatch = useDispatch();

  const removeItemHandler = (id: number, price: number) => {
    dispatch(cartActions.removeFromCart({ id, price }));
  };

  const addItemToCart = (id: number, price: number, title: string) => {
    dispatch(cartActions.addToCart({ id, price, title }));
  };

  const itemPrice = `$${price}`;

  return (
    <li className="cart__item">
      <div>
        <h4>{title}</h4>
        <div className="summary">
          <span className="price">{itemPrice}</span>
          <span className="amount">x {amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={() => removeItemHandler(id, price)}>−</button>
        <button onClick={() => addItemToCart(id, price, title)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
