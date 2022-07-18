import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./UiSlice";
import productReducer from "./ProductSlice";
// import cartSlice from "./CartSlice";
// import filterSlice from "./FilterSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
