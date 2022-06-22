import { createContext, useContext, useReducer } from "react";
import { ICartContext, ICartState } from "../../types/cart";
import { IProps } from "../../types/global";
import { ADD_TO_CART, REMOVE_FROM_CART, ITEM_QUANTITY, CART_AMOUNT, CLEAR_CART } from "../actions";

import reducer from "../reducers/cartReducer";

const initialState: ICartState = {
  items: [],
  itemAmount: 0,
  totalPrice: 0,
  shippingCost: 0,
};

const CartContext = createContext<ICartContext>({
  ...initialState,
});

export const CartProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
