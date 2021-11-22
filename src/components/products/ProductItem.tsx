import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { Link } from "react-router-dom";

import Card from "../../UI/Card";

interface ProductItemProps {
  src: string;
  title: string;
  price: number;
  id: number;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  src,
  title,
  price,
  description,
  id,
}) => {
  const productsState = useSelector((state: RootStateOrAny) => state.products);

  return (
    <Link
      to={`/products/${productsState.activeCategory}/${id}`}
      state={{ src, title, price, description, id }}
    >
      <Card className="product">
        <img src={src} alt={src} />
        <h6>{title}</h6>
        <p>{price} $</p>
      </Card>
    </Link>
  );
};

export default ProductItem;
