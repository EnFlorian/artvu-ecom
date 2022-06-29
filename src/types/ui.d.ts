interface IUiState {
  isModalOpen: boolean;
}

interface IUiContext extends IUiState {
  openModal: () => void;
  closeModal: () => void;
}

type UiActionType =
  | { type: "OPEN_MODAL" }
  | { type: "CLOSE_MODAL" }
  | { type: "OPEN_SIDEBAR" }
  | { type: "CLOSE_SIDEBAR" };
