import { createContext, useContext, useReducer } from "react";
import { IProps } from "../../types/global";
import { IUiContext, IUiState } from "../../types/ui";
import { CLOSE_MODAL, OPEN_MODAL } from "../actions/UiActions";
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
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
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
