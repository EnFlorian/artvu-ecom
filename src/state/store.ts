import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UiSlice";
import productReducer from "./ProductSlice";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
