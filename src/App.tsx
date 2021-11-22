import { useEffect, useState } from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import "./styles/App.scss";
import { BrowserRouter as Router } from "react-router-dom";

import { fetchCategories, fetchProducts } from "./services/productsService";
import { productsActions } from "./store/products-slice";

import Layout from "./components/Layout/Layout";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector((state: RootStateOrAny) => state.products);

  useEffect(() => {
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
      {!isLoading && <Layout />}
      {isLoading && <div>Loading...</div>}
      {!isLoading && error && <div>Something went wrong!</div>}
    </Router>
  );
}

export default App;
