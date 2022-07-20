import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../types/state";
import { products } from "../data";

const initialState: IProductState = {
  products: products,
  featuredProducts: products.slice(0, 3),
  filteredProducts: products,
  query: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFeaturedProducts: (state, action) => {
      state.featuredProducts = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = state.products.filter((product) => {
        return product.name.toLowerCase().includes(action.payload.toLowerCase());
      });
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    sortProducts: (state, action) => {
      if (action.payload === "Price: Lowest") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload === "Price: Highest") {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      } else if (action.payload === "Name: A-Z") {
        state.filteredProducts.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }

          return 0;
        });
      } else if (action.payload === "Name: Z-A") {
        state.filteredProducts.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }

          return 0;
        });
      }
    },
  },
});

export const { setProducts, setFeaturedProducts, setFilteredProducts, setQuery, sortProducts } = productSlice.actions;
export default productSlice.reducer;
