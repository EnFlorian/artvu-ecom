import { IUiState, UiActionType } from "../../types/ui";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR, OPEN_MODAL, CLOSE_MODAL } from "../actions/UiActions";
const reducer = (state: IUiState, action: UiActionType) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return { ...state, isSidebarOpen: true };
    case CLOSE_SIDEBAR:
      return { ...state, isSidebarOpen: false };
    case OPEN_MODAL:
      return { ...state, isModalOpen: true };
    case CLOSE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
};

export default reducer;
