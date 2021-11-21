import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  products: [],
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
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
