import React, { Fragment } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import "../../styles/Modal.scss";

import Modal from "../../UI/Modal";
import CartItem from "./CartItem";

interface CartProps {
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ onClose }) => {
  const cartState = useSelector((state: RootStateOrAny) => state.cart);
  const dispatch = useDispatch();

  const removeItemHandler = (id: number) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const addItemHandler = (item: any) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const cartItems = (
    <ul className="cart__items">
      {cartState.items.map((item: any) => (
        <CartItem
          title={item.title}
          amount={item.amount}
          price={item.totalPrice}
          key={item.id}
          onRemove={removeItemHandler.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalOrderPrice = `${cartState.totalAmount}`;

  const content = (
    <Fragment>
      {cartItems}
      <div className="total">
        <span>Total order amount</span>
        <span>${totalOrderPrice}</span>
      </div>
      <div className="actions">
        <button>Close</button>
        <button>Order!</button>
      </div>
    </Fragment>
  );

  return <Modal onClose={onClose}>{content}</Modal>;
};

export default Cart;
