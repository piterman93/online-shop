import React, { useEffect } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { productsActions } from "../../store/products-slice";

import ProductItem from "../products/ProductItem";

const Products: React.FC = () => {
  const productsState = useSelector((state: RootStateOrAny) => state.products);

  const dispatch = useDispatch();

  const activeProducts = productsState.products.filter(
    (product: any) =>
      product.category.toUpperCase() ===
      productsState.activeCategory.toUpperCase()
  );

  useEffect(() => {
    const activeCategoryFromLocalStorage =
      localStorage.getItem("activeCategory") || "";
    if (!productsState.activeCategory) {
      dispatch(
        productsActions.setActiveCategory(activeCategoryFromLocalStorage)
      );
    }
  }, [productsState.activeCategory, dispatch]);

  const productsList = activeProducts.map((product: any) => (
    <ProductItem
      key={product.id}
      id={product.id}
      src={product.image}
      title={product.title}
      price={product.price}
      description={product.description}
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
