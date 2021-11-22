import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  price: number;
  title: string;
  amount: number;
  totalPrice: number;
  time: string;
  date: string;
}

interface InitialCartState {
  isCartVisible: boolean;
  items: CartItem[];
  totalAmount: number;
  totalPrice: number;
  changed: boolean;
}

const initialState: InitialCartState = {
  isCartVisible: false,
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    addToCart(state, action) {
      state.totalPrice += action.payload.price;
      state.changed = true;
      state.totalAmount++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          time: time,
          date: date,
        });
      } else {
        existingItem.amount = existingItem.amount + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.time = time;
        existingItem.date = date;
      }
    },
    removeFromCart(state, action) {
      const { id, price } = action.payload;
      state.totalPrice -= price;
      state.changed = true;
      state.totalAmount--;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem!.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.amount--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
    getItemsFromLocalStorage(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.price;
    },
    removeItemsFromLocalStorage(state) {
      localStorage.removeItem("cart");
      localStorage.removeItem("price");
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
