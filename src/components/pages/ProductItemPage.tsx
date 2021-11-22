import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Card from "../../UI/Card";

import { cartActions } from "../../store/cart-slice";

const ProductItemPage: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const { id, src, title, price, description } = location.state;

  const addItemToCart = (id: number, price: number, title: string) => {
    dispatch(cartActions.addToCart({ id, price, title }));
  };

  return (
    <div className="products">
      <h1>{title}</h1>
      <span className="underline"></span>
      <Card className="product__details">
        <div className="image">
          <img src={src} alt="src" />
        </div>
        <div className="description">
          <h3>{title}</h3>
          <h6>{description}</h6>
          <p>Price: {price} $</p>
          <div className="actions">
            <button
              className="button__cart"
              onClick={() => addItemToCart(id, title, price)}
            >
              Add to Cart
            </button>
            <button className="button__alt" onClick={() => navigation(-1)}>
              Back to Products{" "}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductItemPage;
