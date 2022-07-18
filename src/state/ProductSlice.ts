import { createSlice } from "@reduxjs/toolkit";
import { IProductState } from "../types/state";
import { products } from "../data/";

const initialState: IProductState = {
  products: products,
  featuredProducts: products.slice(0, 3),
  filteredProducts: products,
  filter: {
    text: "",
    creator: "",
    category: "",
    maxPrice: 1000000,
    online: false,
  },
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
      state.filteredProducts = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterProducts: (state, action) => {
      const { text, creator, category, maxPrice, online } = action.payload;
      state.filteredProducts = state.products.filter((product) => {
        return (
          product.name.toLowerCase().includes(text.toLowerCase()) &&
          product.creator.toLowerCase().includes(creator.toLowerCase()) &&
          product.category.toLowerCase().includes(category.toLowerCase()) &&
          product.price <= maxPrice &&
          product.onlineOrdering === online
        );
      });
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

export const { setProducts, setFeaturedProducts, setFilteredProducts, setFilter, filterProducts, sortProducts } =
  productSlice.actions;
export default productSlice.reducer;
