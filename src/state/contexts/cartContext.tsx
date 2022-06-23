import { createContext, useContext, useEffect, useReducer } from "react";
import { ICartContext, ICartState } from "../../types/cart";
import { IProps } from "../../types/global";
import { IProduct } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, ITEM_QUANTITY, CART_AMOUNT, CLEAR_CART } from "../actions/actions";

import reducer from "../reducers/cartReducer";

const initialState: ICartState = {
  items: [],
  itemAmount: 0,
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

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      dispatch({ type: CLEAR_CART });
      JSON.parse(cart).forEach((item: IProduct) => {
        dispatch({ type: ADD_TO_CART, payload: item });
      });
    }
  }, []);

  const addToCart = (product: IProduct) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
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
