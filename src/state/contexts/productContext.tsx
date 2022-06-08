import { createContext, useContext, useReducer } from "react";
import { IProps } from "../../types/global";
import { IProductContext, IProductState } from "../../types/product";

import { productReducer } from "../reducers";

const initialState: IProductState = {
  products: [],
};

const AppContext = createContext<IProductContext>({
  ...initialState,
});

export const AppProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

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
