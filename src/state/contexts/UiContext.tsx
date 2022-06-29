import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/UiReducer";

const initialState: IUiState = {
  isModalOpen: false,
};

const UiContext = createContext<IUiContext>({
  ...initialState,
  openModal: () => {},
  closeModal: () => {},
});

export const UiProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUiContext = () => {
  return useContext(UiContext);
};
