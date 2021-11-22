import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import ProductItem from "../products/ProductItem";

const Products: React.FC = () => {
  const productsState = useSelector((state: RootStateOrAny) => state.products);

  console.log(productsState.activeCategory);
  const activeProducts = productsState.products.filter(
    (product: any) =>
      product.category.toUpperCase() ===
      productsState.activeCategory.toUpperCase()
  );

  const productsList = activeProducts.map((product: any) => (
    <ProductItem
      key={product.id}
      src={product.image}
      title={product.title}
      price={product.price}
    />
  ));

  return (
    <div className="products">
      <h1>Products</h1>
      <span className="underline"></span>
      <div className="wrapper">{productsList}</div>
    </div>
  );
};

export default Products;
