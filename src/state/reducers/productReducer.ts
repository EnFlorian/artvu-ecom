import { IProductState, ProductActionType } from "../../types/product";
import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  CLEAR_FILTERS,
  APPLY_FILTER,
  APPLY_SORT,
} from "../actions/actions";

const reducer = (state: IProductState, action: ProductActionType) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        featuredProducts: action.payload.slice(0, 3),
        filteredProducts: action.payload,
      };
    case FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_PRODUCT_BEGIN:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: [],
      };
    case APPLY_FILTER:
      return {
        ...state,
        filteredProducts: state.products.filter((product) => {
          return (
            product.category === action.payload || product.name === action.payload || product.creator === action.payload
          );
        }),
      };
    case APPLY_SORT: {
      if (action.payload === "Price: Lowest") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            return a.price - b.price;
          }),
        };
      } else if (action.payload === "Price: Highest") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            return b.price - a.price;
          }),
        };
      } else if (action.payload === "Name: A-Z") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          }),
        };
      } else if (action.payload === "Name: Z-A") {
        return {
          ...state,
          filteredProducts: state.filteredProducts.sort((a, b) => {
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          }),
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
