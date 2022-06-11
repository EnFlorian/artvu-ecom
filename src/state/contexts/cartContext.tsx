import { createContext, useContext, useReducer } from "react";
import { ICartContext, ICartState } from "../../types/cart";
import { IProps } from "../../types/global";
import { IProductContext, IProductState } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, ITEM_QUANTITY, CART_AMOUNT, CLEAR_CART } from "../actions";

import reducer from "../reducers/cartReducer";

const initialState: ICartState = {
  items: [],
  itemAmount: 0,
  totalPrice: 0,
  shippingCost: 0,
};

const AppContext = createContext<ICartContext>({
  ...initialState,
});

export const AppProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
