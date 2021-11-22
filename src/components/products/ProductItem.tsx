import React from "react";

import Card from "../../UI/Card";

interface ProductItemProps {
  src: string;
  title: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ src, title, price }) => {
  return (
    <Card className="product">
      <img src={src} alt={src} />
      <h6>{title}</h6>
      <p>{price} $</p>
    </Card>
  );
};

export default ProductItem;
