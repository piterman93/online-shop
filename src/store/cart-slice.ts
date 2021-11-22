import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  price: number;
  title: string;
  amount: number;
  totalPrice: number;
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
    // replaceCart(state, action) {
    //   state.totalAmount = action.payload.totalAmount;
    //   state.items = action.payload.items;
    // },
    addToCart(state, action) {
      state.totalPrice += action.payload.price;
      state.changed = true;
      state.totalAmount++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.amount = existingItem.amount + 1;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
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
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
