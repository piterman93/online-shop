import { createSlice } from "@reduxjs/toolkit";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: string;
  };
  title: string;
}

export type FetchedProducts = Product[];

interface ProductsState {
  categories: string[];
  products: FetchedProducts;
  activeCategory: string;
}

const initialState: ProductsState = {
  categories: [],
  products: [],
  activeCategory: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
