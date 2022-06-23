import { ICartState, CartActionType } from "../../types/cart";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/actions";

const reducer = (state: ICartState, action: CartActionType) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        itemAmount: state.itemAmount + 1,
        totalPrice: state.totalPrice + action.payload.price,
        shippingCost: state.shippingCost + action.payload.shippingCost,
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
        itemAmount: state.itemAmount - 1,
        totalPrice: state.totalPrice - action.payload.price,
        shippingCost: state.shippingCost - action.payload.shippingCost,
      };

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        itemAmount: 0,
        totalPrice: 0,
        shippingCost: 0,
      };

    default:
      return state;
  }
};

export default reducer;
