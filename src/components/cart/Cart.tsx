import React, { Fragment } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";

import "../../styles/Modal.scss";

import { cartActions } from "../../store/cart-slice";

import Modal from "../../UI/Modal";
import CartItem from "./CartItem";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const dispatch = useDispatch();

  const totalOrderPrice = cartState.totalPrice.toFixed(2);

  const clearLocalStorage = () => {
    dispatch(cartActions.removeItemsFromLocalStorage());
  };

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
        <button className="order" onClick={clearLocalStorage}>
          Order
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </Fragment>
  );

  return <Modal onClose={onClose}>{content}</Modal>;
};

export default Cart;
