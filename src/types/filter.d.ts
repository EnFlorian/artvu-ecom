import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../state/actions/FilterActions";
import { IProduct } from "./product";

export interface IFilterState {
  filteredProducts: IProduct[];
  allProducts: IProduct[];
  gridView: boolean;
  sort: string;
  filters: IFilter;
}

interface IFilter {
  text: string;
  creator: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  price: number;
  online: boolean;
}

export interface IFilterContext extends IFilterState {
  setGridView: (gridView: boolean) => void;
  setListView: (listView: boolean) => void;
  updateSort: (sort: string) => void;
  updateFilters: (filters: IFilter) => void;
  clearFilters: () => void;
}

export type FilterActionType =
  | { type: typeof OPEN_MODAL }
  | { type: typeof LOAD_PRODUCTS; payload: IProduct[] }
  | { type: typeof SET_GRIDVIEW }
  | { type: typeof SET_LISTVIEW }
  | { type: typeof UPDATE_SORT; payload: string }
  | { type: typeof SORT_PRODUCTS }
  | { type: typeof UPDATE_FILTERS; payload: { name: string; value: string } }
  | { type: typeof FILTER_PRODUCTS }
  | { type: typeof CLEAR_FILTERS };
