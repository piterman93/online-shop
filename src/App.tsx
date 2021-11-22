import { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/App.scss";

import { fetchCategories, fetchProducts } from "./services/productsService";
import { productsActions } from "./store/products-slice";
import { cartActions } from "./store/cart-slice";

import Layout from "./components/Layout/Layout";
import Loading from "./components/pages/Loading";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const priceFromLocalStorage = JSON.parse(localStorage.getItem("price") || "");

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state: RootStateOrAny) => state.products);

  useEffect(() => {
    dispatch(
      cartActions.getItemsFromLocalStorage({
        items: cartFromLocalStorage,
        price: priceFromLocalStorage,
      })
    );

    setIsLoading(true);
    fetchProducts()
      .then((data: any) => {
        dispatch(productsActions.setProducts(data));
      })
      .catch((error: any) => setError(error));

    fetchCategories()
      .then((data) => {
        dispatch(productsActions.setCategories(data));
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, [dispatch, products.products.length, products.categories.length]);

  return (
    <Router>
      <div className="App">
        {!isLoading && <Layout />}
        {isLoading && <Loading />}
        {!isLoading && error && <div>Something went wrong!</div>}
      </div>
    </Router>
  );
}

export default App;
