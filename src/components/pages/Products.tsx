import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { Product, productsActions } from "../../store/products-slice";
import TextField from "@mui/material/TextField";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ProductItem from "../products/ProductItem";

const Products: React.FC = () => {
  const [activePageProducts, setActivePageProducts] = useState<Product[] | []>(
    []
  );
  const [inputValue, setInputValue] = useState("");
  const [helperState, setHelperState] = useState(0);

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
    setActivePageProducts(filteredProductsList);
  };

  const sortHandler = (sortType: string) => {
    let sortedList;
    if (sortType === "ascending") {
      sortedList = activePageProducts.sort(
        (a: any, b: any) => a.price - b.price
      );
    } else {
      sortedList = activePageProducts.sort(
        (a: any, b: any) => b.price - a.price
      );
    }
    setHelperState((prevState: number) => (prevState += 1));
    setActivePageProducts(sortedList);
  };

  useEffect(() => {
    setActivePageProducts(activeProducts);
    const activeCategoryFromLocalStorage =
      localStorage.getItem("activeCategory") || "";
    if (!productsState.activeCategory) {
      dispatch(
        productsActions.setActiveCategory(activeCategoryFromLocalStorage)
      );
    }
  }, [productsState.activeCategory, dispatch]);

  const productsList = activePageProducts.map((product: any) => (
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
        <button onClick={() => sortHandler("ascending")}>
          Price <ArrowUpwardIcon />
        </button>
        <button onClick={() => sortHandler("")}>
          Price <ArrowDownwardIcon />
        </button>
      </div>
      <div className="wrapper">
        {activePageProducts.length === 0 && inputValue.length > 0 ? (
          <h3>No products found!</h3>
        ) : (
          productsList
        )}
      </div>
    </div>
  );
};

export default Products;
