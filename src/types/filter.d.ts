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
  | { type: "OPEN_MODAL" }
  | { type: "LOAD_PRODUCTS"; payload: IProduct[] }
  | { type: "SET_GRIDVIEW" }
  | { type: "SET_LISTVIEW" }
  | { type: "UPDATE_SORT"; payload: string }
  | { type: "SORT_PRODUCTS" }
  | { type: "UPDATE_FILTERS"; payload: { name: string; value: string } }
  | { type: "FILTER_PRODUCTS" }
  | { type: "CLEAR_FILTERS" };
