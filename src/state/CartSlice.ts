import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../types/state";

const initialState: ICartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.items.findIndex((item) => item.item.id === action.payload.item.id);
      if (index !== -1) {
        state.items[index].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.item.id === action.payload.item.id);
      if (index !== -1) {
        if (state.items[index].quantity - action.payload.quantity === 0) {
          state.items.splice(index, 1);
        } else {
          state.items[index].quantity -= action.payload.quantity;
        }
      }
    },
    removeItemFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
