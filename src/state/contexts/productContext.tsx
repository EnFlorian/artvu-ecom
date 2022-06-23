import { createContext, useContext, useEffect, useReducer } from "react";
import { IProps } from "../../types/global";
import { IProductContext, IProductState } from "../../types/product";
import { products } from "../../data";
import {
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  APPLY_FILTER,
  CLEAR_FILTERS,
  APPLY_SORT,
  APPLY_MAX_PRICE,
} from "../actions/actions";

import reducer from "../reducers/productReducer";

const initialState: IProductState = {
  products: [],
  product: null,
  loading: false,
  error: "",
  isSidebarOpen: false,
  featuredProducts: [],
  filteredProducts: [],
};

const ProductsContext = createContext<IProductContext>({
  ...initialState,
  fetchProduct: () => {},
  applyFilter: () => {},
  clearFilters: () => {},
  applySort: () => {},
  applyMaxPrice: () => {},
});

export const ProductsProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts();
  }, []);

  // In case we add an external api
  const fetchProducts = () => {
    dispatch({ type: FETCH_PRODUCTS_BEGIN, payload: true });
    if (products.length > 0) {
      dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
    } else {
      dispatch({ type: FETCH_PRODUCTS_ERROR, payload: "Error Fetching Products" });
    }
  };

  const fetchProduct = (id: number) => {
    dispatch({ type: FETCH_PRODUCT_BEGIN, payload: true });
    const product = products.find((product) => product.id === id);
    if (product) {
      dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: product });
    }
    dispatch({ type: FETCH_PRODUCT_ERROR, payload: "Product not found" });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS, payload: "" });
  };

  const applyFilter = (filter: string) => {
    dispatch({ type: APPLY_FILTER, payload: filter });
  };

  const applySort = (sort: string) => {
    dispatch({ type: APPLY_SORT, payload: sort });
  };

  const applyMaxPrice = (maxPrice: number) => {
    dispatch({ type: APPLY_MAX_PRICE, payload: maxPrice });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProduct,
        applyFilter,
        applySort,
        clearFilters,
        applyMaxPrice,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
