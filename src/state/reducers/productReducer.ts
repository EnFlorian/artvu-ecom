import { IProductState, ProductActionType } from "../../types/product";
import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  ADD_FILTER,
  ADD_SORT,
  CLEAR_FILTERS,
  CLEAR_CART,
  REMOVE_FILTER,
  APPLY_FILTERS,
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
    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((filter) => filter !== action.payload),
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: [],
      };
    case ADD_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case APPLY_FILTERS: {
      const stringValues = state.filteredProducts.map((product) => {
        return Object.values(product).filter((val) => typeof val === "string");
      });
      console.log(stringValues);
      return {
        ...state,
        filteredProducts: [],
      };
    }
    // case APPLY_SORT:
    //   return {
    //     ...state,
    //     products: state.products.sort((a, b) => {
    //       if (state.sort === "price") {
    //         return a?.price - b?.price;
    //       } else if (state.sort === "name") {
    //         return a.name.localeCompare(b.name);
    //       }
    //     }),
    //   };

    default:
      return {
        ...state,
        loading: false,
        error: "",
      };
  }
};

export default reducer;
