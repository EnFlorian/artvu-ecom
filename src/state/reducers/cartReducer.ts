import { ICartState } from "../../types/cart";
import { IProductState, ProductActionType } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, ITEM_QUANTITY, CART_AMOUNT, CLEAR_CART } from "../actions/actions";

const reducer = (state: ICartState, action: ProductActionType) => {
  return state;
};

export default reducer;
