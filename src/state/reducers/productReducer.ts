import { IProductState, ProductActionType } from "../../types/product";
import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
} from "../actions";

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
    default:
      return {
        ...state,
        loading: false,
        error: "",
      };
  }
};

export default reducer;
