import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCT_BEGIN,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  OPEN_SIDEBAR,
} from "../state/actions";

export interface IProduct {
  id: number;
  name: string;
  creator: string;
  description: string;
  image: string;
  category: string;
  price: number;
  stock: number;
  additionalImages: string[];
  shippingCost: number;
}

export interface IProductState {
  products: IProduct[];
  product: IProduct | null;
  loading: boolean;
  error: string;
  isSidebarOpen: boolean;
  featuredProducts: IProduct[];
  filteredProducts: IProduct[];
  filters: string[];
  sort: string;
  maxPrice: number;
}

export interface IProductContext extends IProductState {
  fetchProduct: (id: number) => void;
  filterProducts: (filters: string[], sort: string) => void;
  addSort: (sort: string) => void;
  addFilter: (filter: string) => void;
  removeFilter: (filter: string) => void;
  clearFilters: () => void;
}

export type ProductActionType =
  | { type: typeof FETCH_PRODUCTS_SUCCESS; payload: IProduct[] }
  | { type: typeof FETCH_PRODUCTS_ERROR; payload: string }
  | { type: typeof FETCH_PRODUCT_SUCCESS; payload: IProduct }
  | { type: typeof FETCH_PRODUCT_ERROR; payload: string }
  | { type: typeof OPEN_SIDEBAR; payload: boolean }
  | { type: typeof CLOSE_SIDEBAR; payload: boolean }
  | { type: typeof FETCH_PRODUCTS_BEGIN; payload }
  | { type: typeof FETCH_PRODUCT_BEGIN; payload };
