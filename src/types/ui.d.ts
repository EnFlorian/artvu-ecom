import React from "react";
import { OPEN_MODAL, CLOSE_MODAL, CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../state/actions/UiActions";

export interface IUiState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
}

export interface IUiContext extends IUiState {
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: (e: any) => void;
}

export type UiActionType =
  | { type: typeof OPEN_MODAL }
  | { type: typeof CLOSE_MODAL }
  | { type: typeof OPEN_SIDEBAR }
  | { type: typeof CLOSE_SIDEBAR };
