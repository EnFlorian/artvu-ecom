import { createContext, useContext, useReducer } from "react";
import { IProps } from "../../types/global";
import { IProductContext, IProductState } from "../../types/product";
import { ADD_TO_CART, REMOVE_FROM_CART, ITEM_QUANTITY, CART_AMOUNT, CLEAR_CART } from "../actions";

import reducer from "../reducers/productReducer";

const initialState: IProductState = {
  products: [],
};

const AppContext = createContext<IProductContext>({
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
