import React, { Fragment } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import "../../styles/Modal.scss";

import Modal from "../../UI/Modal";
import CartItem from "./CartItem";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);

  const cartItems = (
    <ul className="cart__items">
      {cartState.items.map((item: any) => (
        <CartItem
          id={item.id}
          title={item.title}
          amount={item.amount}
          totalPrice={item.totalPrice}
          price={item.price}
          key={item.id}
        />
      ))}
    </ul>
  );

  const totalOrderPrice = cartState.totalPrice.toFixed(2);

  const content = (
    <Fragment>
      {cartItems}
      <div className="total">
        <span>Total order amount: </span>
        <span>
          <strong>${totalOrderPrice}</strong>
        </span>
      </div>
      <div className="actions">
        <button className="order">Order</button>
        <button onClick={onClose}>Close</button>
      </div>
    </Fragment>
  );

  return <Modal onClose={onClose}>{content}</Modal>;
};

export default Cart;
