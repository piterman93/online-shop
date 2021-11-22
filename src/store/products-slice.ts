import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  categories: string[];
  products: [];
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
