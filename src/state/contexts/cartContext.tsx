import { createContext, useContext, useReducer } from "react";
import { ICartContext, ICartState } from "../../types/cart";
import { IProps } from "../../types/global";
import { IProduct } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/actions";

import reducer from "../reducers/cartReducer";

const initialState: ICartState = {
  cart: [],
  itemAmount: 5,
  totalPrice: 0,
  shippingCost: 0,
};

const CartContext = createContext<ICartContext>({
  ...initialState,
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product: IProduct) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const clearCart = (product: IProduct) => {
    dispatch({ type: CLEAR_CART, payload: product });
  };

  const removeFromCart = (product: IProduct) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
