import { createContext, useContext, useEffect, useReducer } from "react";
import { IFilterContext, IFilterState } from "../../types/filter";
import { IProps } from "../../types/global";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions/FilterActions";
import reducer from "../reducers/FilterReducer";
import { useProductsContext } from "./productContext";

const initialState: IFilterState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    creator: "all",
    category: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    online: false,
  },
};

const FilterContext = createContext<Partial<IFilterContext>>({
  ...initialState,
});

export const FilterProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e: any) => {
    const value = e?.target?.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "online") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider value={{ ...state, setListView, setGridView, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
