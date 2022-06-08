import { FETCH_PRODUCT, FETCH_PRODUCTS } from "../state/actions";

export interface IProduct {
  id: number;
  name: string;
  creator: string;
  description: string;
  price: number;
}

export interface IProductState {
  products: IProduct[];
}

export interface IProductContext {
  products: IProduct[];
}

export type ProductActionType =
  | { type: typeof FETCH_PRODUCT; payload: IProduct }
  | { type: typeof FETCH_PRODUCTS; payload: IProduct[] };
