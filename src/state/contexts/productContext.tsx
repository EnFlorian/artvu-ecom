import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";
import { products } from "../../data";

const initialState: IProductState = {
  products: [],
  featuredProducts: [],
  filteredProducts: [],
};

const ProductsContext = createContext<IProductContext>({
  ...initialState,
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
    dispatch({ type: "FETCH_PRODUCTS", payload: products });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS", payload: "" });
  };

  const applyFilter = (filter: string) => {
    dispatch({ type: "APPLY_FILTER", payload: filter });
  };

  const applySort = (sort: string) => {
    dispatch({ type: "APPLY_SORT", payload: sort });
  };

  const applyMaxPrice = (maxPrice: number) => {
    dispatch({ type: "APPLY_MAX_PRICE", payload: maxPrice });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
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
