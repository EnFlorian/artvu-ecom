import { ADD_TO_CART, REMOVE_FROM_CART, CART_AMOUNT, ITEM_QUANTITY, CLEAR_CART } from "../state/actions";
import { IProduct } from "./product";

export interface ICartState {
  cart: IProduct[];
  itemAmount: number;
  totalPrice: number;
  shippingCost: number;
}

export interface ICartContext extends ICartState {
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
}

export type CartActionType =
  | { type: typeof ADD_TO_CART; payload: IProduct }
  | { type: typeof CART_AMOUNT; payload: IProduct }
  | { type: typeof REMOVE_FROM_CART; payload: IProduct }
  | { type: typeof ITEM_QUANTITY; payload: IProduct }
  | { type: typeof CLEAR_CART };
