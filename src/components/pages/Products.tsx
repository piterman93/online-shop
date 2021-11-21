import React, { useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { fetchCategories, fetchProducts } from "../../services/productsService";
import { productsActions } from "../../store/products-slice";

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const products = useSelector((state: RootStateOrAny) => state.products);

  useEffect(() => {
    if (products.products.length === 0) {
      setIsLoading(true);
      fetchProducts()
        .then((data) => {
          dispatch(productsActions.setProducts(data));
        })
        .catch((error) => setError(error));
    }

    if (products.categories.length === 0) {
      fetchCategories()
        .then((data) => {
          dispatch(productsActions.setCategories(data));
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    }
  }, [dispatch, products.products.length, products.categories.length]);

  const content = isLoading ? (
    <div className="loading">Loading...</div>
  ) : error ? (
    <div>Something went wrong...</div>
  ) : (
    <div>Products</div>
  );

  return <div>{content}</div>;
};

export default Products;
