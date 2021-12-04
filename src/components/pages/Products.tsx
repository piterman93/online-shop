import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Product, productsActions } from "../../store/products-slice";
import TextField from "@mui/material/TextField";

import ProductItem from "../products/ProductItem";

const Products: React.FC = () => {
  const [searchProducts, setSearchProducts] = useState<Product[] | []>([]);
  // const [sortedProducts, setSortedProducts] = useState<Product[] | []>([]);
  const [inputValue, setInputValue] = useState("");

  const productsState = useSelector((state: RootStateOrAny) => state.products);
  const dispatch = useDispatch();

  const activeProducts = productsState.products.filter(
    (product: any) =>
      product.category.toUpperCase() ===
      productsState.activeCategory.toUpperCase()
  );

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    const inputSearch = e.target.value.toLowerCase();
    const filteredProductsList = activeProducts.filter((item: Product) =>
      item.title.toLowerCase().includes(inputSearch)
    );
    setSearchProducts(filteredProductsList);
  };

  const productsListToMap =
    searchProducts.length < activeProducts.length && inputValue.length > 0
      ? searchProducts
      : activeProducts;

  // const sortAscending = () => {
  //   const sortedList = productsListToMap.sort((a: any, b: any) =>
  //     a.price < b.price ? -1 : a.price > b.price ? 1 : 0
  //   );
  //   setSortedProducts(sortedList);
  // };

  useEffect(() => {
    const activeCategoryFromLocalStorage =
      localStorage.getItem("activeCategory") || "";
    if (!productsState.activeCategory) {
      dispatch(
        productsActions.setActiveCategory(activeCategoryFromLocalStorage)
      );
    }
  }, [productsState.activeCategory, dispatch, activeProducts]);

  const productsList = productsListToMap.map((product: any) => (
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
      <div className="search">
        <TextField
          id="outlined-basic"
          label="Search products"
          variant="outlined"
          size="small"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="sort">
        {/* <button onClick={sortAscending}>+</button> */}
        {/* <button>-</button> */}
      </div>
      <div className="wrapper">
        {searchProducts.length === 0 && inputValue.length > 0 ? (
          <h3>No products found!</h3>
        ) : (
          productsList
        )}
      </div>
    </div>
  );
};

export default Products;
