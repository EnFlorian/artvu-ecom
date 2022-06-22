import { createContext, useContext, useReducer } from "react";
import { IProps } from "../../types/global";
import { IUiContext, IUiState } from "../../types/ui";
import { CLOSE_MODAL, CLOSE_SIDEBAR, OPEN_MODAL, OPEN_SIDEBAR } from "../actions/UiActions";
import reducer from "../reducers/UiReducer";

const initialState: IUiState = {
  isSidebarOpen: false,
  isModalOpen: true,
};

const UiContext = createContext<Partial<IUiContext>>({
  ...initialState,
  openModal: () => {},
  closeModal: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

export const UiProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  const closeModal = (e: MouseEvent) => {
    e?.stopPropagation();
    console.log("closeModal");
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
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
